class EmailContactMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.message_mailer.SendMessage.subject
  #
  def send_message(email_contact)
    @email_contact = email_contact
    mail from: "no-reply@chriscentrella.com", to: "ccentrella.j@gmail.com", subject: "New Form Submission"
   end
end
