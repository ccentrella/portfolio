class EmailContactController < ApplicationController
    def new
        @email_contact = EmailContact.new
    end
    
    def create
        @email_contact = EmailContact.new(email_contact_params)
        if @email_contact.valid?
           if @email_contact.deliver
                flash[:success] = 'Message sent!'
                redirect_to contact_path
            else
                flash.now[:error] = 'Message could not be sent. Please try again'
                render :new, status: :unprocessable_entity
            end
        else
            # flash[:error] = 'Error. Message could not be sent.'
            render :new, status: :unprocessable_entity
        end
    end

    private

    def email_contact_params
        params.require(:email_contact).permit(:name, :email, :message, :nickname)
    end
end
