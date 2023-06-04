class ApplicationController < ActionController::API
    
    def after_sign_in_path_for(resource)
       profile_path
    end
    
    def after_sign_out_path_for(resource)
      root_path
    end
end
