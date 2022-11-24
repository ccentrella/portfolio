class Api::V1::SubscribersController < ApplicationController

    protect_from_forgery with: :null_session

    def create
        @subscriber = Subscriber.new(subscriber_params)
        response_token = params['g-recaptcha-response']
        recaptcha_verify = helpers.verify_recaptcha(response_token)

        # Ensure subscriber does not already exist
        if !Subscriber.find_by_email_address(@subscriber.email_address).nil?
            return head :conflict
        end

        # Ensure data is valid and passes recaptcha filter
        if !@subscriber.valid? || recaptcha_verify != :ok
            return head :bad_request
        end
        
        # Attempt to save subscriber
        if @subscriber.save
            head :ok
        else
            head :unprocessable_entity
        end
    end

    def edit
        if !Subscriber.exists?(get_subscriber)
            head :not_found
        end
    end

    def destroy
        subscriber = get_subscriber
        @subscriber = Subscriber.find(subscriber)

        if !Subscriber.exists?(subscriber)
            head :not_found
        elsif @subscriber.destroy
            head :ok
        else
            head :unprocessable_entity
        end
    end

    private
    def get_subscriber
        begin
            @subscriber = params[:id]
            subscriber = Rails.application.message_verifier(:unsubscribe).verify(CGI::unescape(@subscriber))
        rescue ActiveSupport::MessageVerifier::InvalidSignature || ActionController::BadRequest => e
            @subscriber
        end
    end

    def subscriber_params
        params.require(:subscriber).permit(:email_address, :name)
    end
end
