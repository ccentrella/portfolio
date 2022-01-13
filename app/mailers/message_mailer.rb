class MessageMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.message_mailer.SendMessage.subject
  #
  def SendMessage
    @greeting = "Hi"

    mail to: "to@example.org"
  end
end
