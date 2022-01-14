class MessagesController < ApplicationController

    def create
        @message = Message.new(message_params)
        if @message.send_message_email
            flash.now[:success] = 'Message sent!'
        else
            flash.now[:error] = 'Could not send message'
            render :new
        end
    end

    def new
        @message = Message.new
    end

    private

    def message_params
        params.require(:message).permit(:name, :email, :details, :nickname)
    end
end
