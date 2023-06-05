# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
   def new
      success = verify_recaptcha(action: 'sign_up', minimum_score: 0.5, secret_key: ENV['RECAPTCHA_SECRET_KEY_V3'])
      checkbox_success = verify_recaptcha unless success

      if success || checkbox_success
         super
      else
         @show_checkbox_recaptcha = true
         render :new
      end
   end

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
     devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  # If you have extra params to permit, append them to the sanitizer.
  def configure_account_update_params
     devise_parameter_sanitizer.permit(:account_update, keys: [:name])
  end

end
