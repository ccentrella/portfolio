module Api::V1::SubscribersHelper

    def notify_subscribers(post)
        for subscriber in Subscriber.all
            unsubscribe_link = subscriber.generate_unsubscribe_link
            subscriber.deliver(post, unsubscribe_link)
        end
    end
    
end
