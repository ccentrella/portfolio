# frozen_string_literal: true

class Users::UnlocksController < Devise::UnlocksController
  respond_to :json
end
