class Subscriber < ApplicationRecord
    
    attr_accessor :nickname
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email_address, presence: true, uniqueness: true, length: { maximum: 255 },
    format: { with: VALID_EMAIL_REGEX }
    validates :nickname, presence: false

    def deliver(post, unsubscribe_link)
        SubscriberMailer.send_message(self, post, unsubscribe_link).deliver
    end

    def get_author
       return name.nil? ? "User" : name
    end

    def generate_unsubscribe_link
        Rails.application.message_verifier(:unsubscribe).generate(id)
    end

end
