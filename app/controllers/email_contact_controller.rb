class EmailContactController < ApplicationController
    def new
        @email_contact = EmailContact.new
    end
    
    def create
        @email_contact = EmailContact.new(email_contact_params)
        success = verify_recaptcha(action: 'contact', minimum_score: 0.5, secret_key: ENV['RECAPTCHA_SECRET_KEY_V3'])
        checkbox_success = verify_recaptcha unless success

        if success || checkbox_success
            if @email_contact.valid?
                if @email_contact.deliver
                     flash[:success] = 'Message sent!'
                     redirect_to contact_path
                 else
                     flash.now[:error] = 'Message could not be sent. Please try again'
                     render :new
                 end
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

    private

    def email_contact_params
        params.require(:email_contact).permit(:name, :email, :message)
    end
end
