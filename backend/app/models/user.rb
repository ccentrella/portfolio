class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # , :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, 
         :confirmable, :lockable
  validates :name, presence: true
  def User.get_user_name(id)
    if User.exists?(id)
      return User.find(id).name
    else
      return "Author"
    end
  end
end
