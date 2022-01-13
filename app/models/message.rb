class Message < ApplicationRecord
    attribute :name, validate: true
    attribute :email, validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
    attribute :messsage, validate: true
    attribute :nickname, captcha: true

    # Declare email headers
    def headers
    {
        :subject => "Contact Form Inquiry",
        :to => "ccentrella.j@gmail.com",
        :from => %("#{name}" <#{email}>)
    }
    end
end