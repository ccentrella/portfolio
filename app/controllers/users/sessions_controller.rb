# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController

  # before_action :configure_sign_in_params, only: [:create]
  prepend_before_action :check_captcha, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  protected
  def check_captcha
    success = verify_recaptcha(action: 'sign_in', minimum_score: 0.5, secret_key: ENV['RECAPTCHA_SECRET_KEY_V3'])
    checkbox_success = verify_recaptcha unless success

    if success || checkbox_success
        return
    end

    @show_checkbox_recaptcha = true
    render :new
  end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
