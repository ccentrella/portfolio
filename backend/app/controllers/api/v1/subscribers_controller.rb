class Api::V1::SubscribersController < ApplicationController

    protect_from_forgery with: :null_session

    before_action :get_subscriber, only: [:show, :destroy]

    def show
        if @subscriber.nil?
            return render json: "Not Found. Subscriber does not exist.", status: 404
        end

        render json: @subscriber
    end

    def create
        @subscriber = Subscriber.new(subscriber_params)
        response_token = params['g-recaptcha-response']
        recaptcha_verify = helpers.verify_recaptcha(response_token)

        if !Subscriber.find_by_email_address(@subscriber.email_address).nil?
            return render json: "You have already subscribed.", status: 409
        end

        # Ensure data is valid and passes recaptcha filter
        if !@subscriber.valid?
            return render json: "Bad Request. Please try again using valid data.", status: 400
        elsif recaptcha_verify != :ok
            return render json: "ReCaptcha Failed. We just need to make sure you're human :)", status: 424
        end

        begin
            @subscriber.save
        rescue
            return render json: "Server Error. Please try to subscribe again.", status: 500
        end

        render json: "Subscription Successful. Thank you for subscribing!"
    end

    def destroy
        if @subscriber.nil?
            return render json: "Gone. You have already been unsubscribed.", status: 404
        end

        begin
            @subscriber.destroy
        rescue
            return render json: "Server Error. Please try to unsubscribe again.", status: 500
        end
        
        render json: "Unsubscription Successful. We're sorry to see you go!", status: 204
    end

    private
    def get_subscriber
        begin
            subscriber_hash = params[:id]
            subscriber = Rails.application.message_verifier(:unsubscribe).verify(CGI::unescape(subscriber_hash))
            @subscriber = Subscriber.find(subscriber)
        rescue ActiveSupport::MessageVerifier::InvalidSignature || ActionController::BadRequest
            return render json: "Invalid Signature. Subscriber could not be retrieved.", status: 400
        rescue
            return render json: "Server Error. Subscriber could not be retrieved.", status: 500
        end
    end

    def subscriber_params
        params.require(:subscriber).permit(:email_address, :name)
    end
end
