class SubscriberMailer < ApplicationMailer

  def send_message(subscriber, post, unsubscribe_link)
    @subscriber = subscriber
    @post = post
    @unsubscribe_link = unsubscribe_link
    mail from: "no-reply@chriscentrella.com", to: @subscriber.email_address, subject: "#{@post.title} - New Blog Post | chriscentrella.com"
   end
end
