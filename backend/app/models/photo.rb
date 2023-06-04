class Photo < ApplicationRecord
    default_scope -> { order(created_at: :desc) }
    validates :path, presence: true
    validates :user_id, presence: true
end
