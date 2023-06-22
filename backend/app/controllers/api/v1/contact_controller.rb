class Api::V1::ContactController < ApplicationController

    protect_from_forgery with: :null_session

    def create
        @email_contact = EmailContact.new(email_contact_params)
        response_token = params['g-recaptcha-response']
        recaptcha_verify = helpers.verify_recaptcha(response_token)

        # Ensure data is valid and passes recaptcha filter
        if !@email_contact.valid?
            return render json: "Bad Request. Please try again using valid data.", status: 400
        elsif recaptcha_verify != :ok
            return render json: "ReCaptcha Failed. We just need to make sure you're human :)", status: 424
        end

        if !@email_contact.deliver
            return render json: "Server error. Failed to send email.", status: 500
        render json: "Email sent successfully."
    end

    private

    def email_contact_params
        params.require(:contact).permit(:name, :email, :message);
    end
end
