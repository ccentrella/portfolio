class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # , :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, 
         :confirmable, :lockable
  def User.get_user_name(id)
    return User.find(id).name
  end
end
