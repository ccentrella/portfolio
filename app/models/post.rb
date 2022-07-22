class Post < ApplicationRecord
    default_scope -> { order(created_at: :desc) }
    validates :user_id, presence: true
    validates :title, presence:true

    def get_time()
        return '5 mins.'
    end
end
