class Message < MailForm::Base
    attr_accessor :name, :email, :details, :nickname
    validates(:name, presence: true, length: { maximum: 50 })
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates(:email, presence: true, length: { maximum: 255 },
              format: { with: VALID_EMAIL_REGEX })

    # Send email
    def send_message_email
        EmailContactMailer.send_message(self).deliver
    end

end