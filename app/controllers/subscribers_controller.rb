class SubscribersController < ApplicationController
    
    def create
        @subscriber = Subscriber.new(subscriber_params)
        if @subscriber.save
            flash[:success] = "Thank you for subscribing!"
            redirect_to subscribers_url
        else
            render :new, status: :unprocessable_entity
        end
    end

    def edit
        @subscriber = Subscriber.find(params[:id])
    end

    def update
        @subscriber = Subscriber.find(params[:id])
        if @subscriber.update(subscriber_params)
            flash[:notice] = "Account Updated Successfully"
            redirect_to posts_path
        else
            flash[:warning] = "The account could not be updated. Please try again and make sure another account with this email does not exist."
            redirect_to subscribers_url
        end
    end

    def destroy
        @subscriber = Subscriber.find(params[:id])
        if @subscriber.destroy
            flash[:warning] = "You have been unsubscribed successfully. I'm sorry to see you go!"
            redirect_to posts_path, status: :see_other
        else
            flash[:warning] = "Unsubscribe failed. Please try again or reach out to me."
            redirect_to subscribers_url, status: :see_other
        end
    end

    private
        def subscriber_params
            params.require(:subscriber).permit(:email_address, :name)
        end
end
