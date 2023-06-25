class User < ApplicationRecord

  has_secure_password

  validates :name, presence: true
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true

  def User.get_user_name(id)
    if User.exists?(id)
      return User.find(id).name
    else
      return "Author"
    end
  end

end
