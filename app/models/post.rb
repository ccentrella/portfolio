class Post < ApplicationRecord
    attr_accessor :nickname

    default_scope -> { order(created_at: :desc) }
    validates :user_id, presence: true
    validates :title, presence: true
    validates :nickname, presence: false
    has_rich_text :content

    def get_time()
        return '5 mins.'
    end

    def get_author()
        return 'Chris Centrella'
    end
end
