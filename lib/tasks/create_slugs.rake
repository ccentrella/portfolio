desc "Update existing posts to add slugs based on title"
task create_slugs: [:environment] do
    for post in Post.all
        slug = post.title.parameterize
        if post.slug.nil? && Post.find_by_slug(slug).nil?
            post.slug = slug
            post.save
        end
    end
end