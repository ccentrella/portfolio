class Api::V1::UsersController < ApplicationController
    before_action :authenticate

    def show
        render json: @user
    end

    def update
        @user.update(update_params)
    end

    def destroy
        @user.destroy
        head 204
    end

    private
    def authenticate
        token = request.headers['authorization']
        session = Session.show(token)

        if session.nil?
            return render json: "Unauthenticated. Please sign in to continue.", status: 401
        end

        @user = User.find_by(session.user_id)
    end

    def update_params
        params.require(:user_id).permit(:name, :username, :email, :password)
    end
end
