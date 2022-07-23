class Subscriber < ApplicationRecord
    attr_accessor :nickname

    validates :email_address, presence: true, uniqueness: true
    validates :nickname, presence: false
end
