class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def User.get_user_name(id)
    if id == 1
      return 'Chris Centrella'
    else
      return 'Author'
    end
  end
end
