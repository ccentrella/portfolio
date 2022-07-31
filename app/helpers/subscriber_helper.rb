module SubscriberHelper

    def notify_subscribers(post)
        for subscriber in Subscriber.all
            subscriber.deliver(post)
        end
    end
end
