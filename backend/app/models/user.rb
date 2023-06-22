class User < ApplicationRecord

  def User.get_user_name(id)
    if User.exists?(id)
      return User.find(id).name
    else
      return "Author"
    end
  end

end
