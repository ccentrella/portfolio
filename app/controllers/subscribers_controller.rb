class SubscribersController < ApplicationController
    
    def create
        @subscriber = Subscriber.new(subscriber_params)
        if @subscriber.save
            flash[:success] = "Thank you for subscribing!"
        else
            flash[:warning] = "Subscription Request Failed"
        end
        redirect_to subscribers_url
    end

    private
        def subscriber_params
            params.require(:subscriber).permit(:email_address, :name)
        end
end
