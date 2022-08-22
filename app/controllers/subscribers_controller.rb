class SubscribersController < ApplicationController
    
    def create
        @subscriber = Subscriber.new(subscriber_params)
        success = verify_recaptcha(action: 'subscribe', minimum_score: 0.5, secret_key: ENV['RECAPTCHA_SECRET_KEY_V3'])
        checkbox_success = verify_recaptcha unless success
        
        if success || checkbox_success
            if @subscriber.save
                flash[:success] = "Thank you for subscribing!"
                redirect_to blog_path
            else
                render :new
            end
        else
          @show_checkbox_recaptcha = true
          render :new
        end
    end

    def unsubscribe
        begin
            @subscriber = params[:subscriber_id]
            subscriber = Rails.application.message_verifier(:unsubscribe).verify(CGI::unescape(@subscriber))

            if !Subscriber.exists?(subscriber)
                flash[:warning] = "You have already unsubscribed. You should stop receiving emails within 7-10 days, at the latest."
                redirect_to blog_path, status: :see_other
            end
        rescue ActiveSupport::MessageVerifier::InvalidSignature || ActionController::BadRequest => e
            raise ActionController::RoutingError.new('Not Found')
        end
    end

    # For security purposes, re-verify email token to prevent maliciously directly executing destroy
    def destroy
        begin
            subscriber = Rails.application.message_verifier(:unsubscribe).verify(CGI::unescape(params[:subscriber_id]))
            @subscriber = Subscriber.find(subscriber)
        rescue ActiveSupport::MessageVerifier::InvalidSignature || ActionController::BadRequest => e
            raise ActionController::RoutingError.new('Not Found')
        end

        if !Subscriber.exists?(subscriber)
            flash[:warning] = "You have already unsubscribed. You should stop receiving emails within 7-10 days, at the latest."
            redirect_to blog_path, status: :see_other
        elsif @subscriber.destroy
            flash[:warning] = "You have been unsubscribed successfully. I'm sorry to see you go!"
            redirect_to blog_path, status: :see_other
        else
            flash[:warning] = "Unsubscribe failed. Please try again or reach out to me."
            render :unsubscribe, locals: {subscriber_id: @subscriber}, status: :unprocessable_entity
        end
    end

    private
        def subscriber_params
            params.require(:subscriber).permit(:email_address, :name)
        end
end
