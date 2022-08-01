# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  before_action :authenticate_user!, only: [:home]

  def home
  end

  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  def new
    success = verify_recaptcha(action: 'sign_in', minimum_score: 0.5, secret_key: ENV['RECAPTCHA_SECRET_KEY'])
    checkbox_success = verify_recaptcha unless success

    if success || checkbox_success
       super
    else
       if !success
          @show_checkbox_recaptcha = true
       end
       render :new, status: :unprocessable_entity
    end
 end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
