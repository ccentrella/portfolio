class MessagesController < ApplicationController

    def create
        @message = Message.new(user_params)
        if @user.delivery
            flash.now[:success] = 'Message sent!'
        else
            flash.now[:error]= 'Could not send message'
            render 'new'
        end
    end

    def new
        @message = Message.new
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :message)
    end
end
