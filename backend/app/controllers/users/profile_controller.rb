class Users::UsersController < ApplicationController

    def name
        @user = User.find(params[:id])
        if @user
            @user.name
        else
            "Author"
        end
  end
end
