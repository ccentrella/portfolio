class Api::V1::ContactController < ApplicationController

    protect_from_forgery with: :null_session

    def create
        @email_contact = EmailContact.new(email_contact_params)
        response_token = params['g-recaptcha-response']
        recaptcha_verify = helpers.verify_recaptcha(response_token)

        # Ensure data is valid and passes recaptcha filter
        if !@email_contact.valid? || recaptcha_verify != :ok
            return head :bad_request
        end
        
        # Attempt to send message
        if @email_contact.deliver
            head :ok
        else
            head :unprocessable_entity
        end
    end

    private

    def email_contact_params
        params.require(:contact).permit(:name, :email, :message);
    end
end
