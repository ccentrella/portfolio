class MessagesMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.message_mailer.SendMessage.subject
  #
  def send_message(message)
    @message = message
    mail to: message.email, subject: "New Form Submission"
   end
end
