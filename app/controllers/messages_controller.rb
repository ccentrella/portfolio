class MessagesController < ApplicationController

    def new
        @message = Message.new
    end
    
    def create
        @message = Message.new(message_params)
        @message.request = request
        if @message.validate
            @message.send_message_email
            flash[:success] = 'Message sent!'
            redirect_to contact_path
        else
            flash[:error] = 'Error. Message could not be sent.'
            render :new
        end
    end

    private

    def message_params
        params.require(:message).permit(:name, :email, :details, :nickname)
    end
end
