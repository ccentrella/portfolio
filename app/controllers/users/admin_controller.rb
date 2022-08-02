class Users::AdminController < ApplicationController
    before_action :authenticate_user!

    def home
        render 'admin/home'
    end
end
