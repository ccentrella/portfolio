class ErrorsController < ActionController::Base
    layout 'error'

    def not_found
        render status: :not_found
    end

    def server_error
        render status: :server_error
    end

end
