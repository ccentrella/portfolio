class SubscriberMailer < ApplicationMailer

  def send_message(subscriber, post)
    @subscriber = subscriber
    @post = post
    mail from: "no-reply@chriscentrella.com", to: @subscriber.email_address, subject: "#{@post.title} - New Blog Post | chriscentrella.com"
   end
end
