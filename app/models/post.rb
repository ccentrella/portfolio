class Post < ApplicationRecord
    attr_accessor :nickname

    default_scope -> { order(created_at: :desc) }
    validates :user_id, presence: true
    validates :title, presence: true
    validates :nickname, presence: false
    has_rich_text :content

    def get_date()
        Time.zone.utc_to_local(created_at).strftime('%B %d, %Y')
    end

    def get_time()
        words = content.to_plain_text().split()
        minutes = round([1, words.length / 200].max)
        message = "%d minute".pluralize(minutes) % minutes
        return message
    end

    def get_author()
        return User.get_user_name(user_id)
    end

    # Round to nearest five minutes
    def round(minutes)
        if minutes < 5
            return minutes
        else
            remainder = minutes % 5
            return remainder < 3 ? minutes - remainder : minutes + 5 - remainder
        end
    end
end
