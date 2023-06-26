class Api::V1::SessionsController < ApplicationController
    include ::ActionController::HttpAuthentication::Token::ControllerMethods
    include ::ActionController::HttpAuthentication::Digest::ControllerMethods

    before_action :authenticate, except: [:create]

    def create
        authenticate_with_http_digest do |username|
            user = User.find_by(username: username)
            valid = ActiveSupport::SecurityUtils.secure_compare(user.password_digest, params['password_digest'])

            if valid
                token = ActiveRecord::SecureToken::generate_unique_secure_token()
                @session = { user_id: user.id, token: token }
                # TODO: Add token to database
                render json: @session, status: 201
            end
        end
    end

    def show
        render json: @session
    end

    def destroy
        @session.destroy
        head 204
    end

    private
    def authenticate
        authenticate_or_request_with_http_token do |token|
            # TODO: Get saved token from database
            valid = ActiveSupport::SecurityUtils.secure_compare(token, saved_token)
            if valid
                # Set @session
            end
        end
    end
end