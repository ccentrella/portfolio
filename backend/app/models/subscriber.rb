class Subscriber < ApplicationRecord
    
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email_address, presence: true, uniqueness: true, length: { maximum: 255 },
    format: { with: VALID_EMAIL_REGEX }

    def deliver(post, unsubscribe_link)
        SubscriberMailer.send_message(self, post, unsubscribe_link).deliver
    end

    def get_author
       return name.nil? ? "User" : name
    end

    def generate_unsubscribe_link
        CGI::escape(Rails.application.message_verifier(:unsubscribe).generate(id))
    end

end
