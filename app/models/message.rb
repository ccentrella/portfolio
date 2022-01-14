class Message < MailForm::Base
    attribute :name, validate: true
    attribute :email, validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
    attribute :details, validate: true
    attribute :nickname, captcha: true

    # Send email
    def send_message_email
        MessagesMailer.send_message(self).deliver_now
    end
end