module PostsHelper
    def get_latest_article
        if Post.count > 0
            Post.first
        else
            Post.new
        end
    end
end
