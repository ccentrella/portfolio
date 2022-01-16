class EmailContact
    include ActiveModel::API
    include ActiveModel::Validations

    attr_accessor :name, :email, :message, :nickname
    validates :name, presence: true, length: { maximum: 50 }
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email, presence: true, length: { maximum: 255 },
              format: { with: VALID_EMAIL_REGEX }
    validates :message, presence: true
    validates :nickname, presence: false

    def deliver
            EmailContactMailer.send_message(self).deliver
    end
end
