class SubscribersController < ApplicationController
    
    def create
        @subscriber = Subscriber.new(subscriber_params)
        success = verify_recaptcha(action: 'subscribe', minimum_score: 0.5, secret_key: ENV['RECAPTCHA_SECRET_KEY_V3'])
        checkbox_success = verify_recaptcha unless success
        
        if success || checkbox_success
            if @subscriber.save
                flash[:success] = "Thank you for subscribing!"
                render :new
            else
                render :new
            end
        else
          if !success
            @show_checkbox_recaptcha = true
          end
          render :new
        end
    end

    # def edit
    #     @subscriber = Subscriber.find(params[:id])
    # end

    # def update
    #     @subscriber = Subscriber.find(params[:id])
    #     if @subscriber.update(subscriber_params)
    #         flash[:notice] = "Account Updated Successfully"
    #         redirect_to posts_path
    #     else
    #         flash[:warning] = "The account could not be updated. Please try again and make sure another account with this email does not exist."
    #         redirect_to subscribers_url
    #     end
    # end

    def unsubscribe
        render layout: false
        subscriber = Rails.application.message_verifier(:unsubscribe).verify(params[:id])
        @subscriber = Subscriber.find(subscriber)

        if !@subscriber.nil?
            render layout: "unsubscribe"
        end
    end

    def destroy
        @subscriber = Subscriber.find(params[:id])
        if @subscriber.destroy
            flash[:warning] = "You have been unsubscribed successfully. I'm sorry to see you go!"
            redirect_to posts_path, status: :see_other
        else
            flash[:warning] = "Unsubscribe failed. Please try again or reach out to me."
            render :unsubscribe, status: unprocessable_entity
        end
    end

    private
        def subscriber_params
            params.require(:subscriber).permit(:email_address, :name)
        end
end
