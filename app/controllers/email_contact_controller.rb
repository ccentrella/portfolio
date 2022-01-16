class EmailContactController < ApplicationController
    def new
        @email_contact = EmailContact.new
    end
    
    def create
        @email_contact = EmailContact.new(email_contact_params)
        if @email_contact.valid?
            @email_contact.deliver
            flash[:success] = 'Message sent!'
            redirect_to contact_path
        else
            flash[:error] = 'Error. Message could not be sent.'
            render :new
        end
    end

    private

    def email_contact_params
        params.require(:email_contact).permit(:name, :email, :message, :nickname)
    end
end
