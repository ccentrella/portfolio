class PostsController < ApplicationController
    before_action :authenticate_user!
    skip_before_action :authenticate_user!, only: [:index, :show]

    def index
        @posts = Post.all
        @subscriber = Subscriber.new

        render json: @posts

        # respond_to do |format|
        #     format.html
        #     format.rss {render layout: false}
        # end
    end

    def admin_index
        @posts = Post.all
        @subscriber = Subscriber.new
    end

    def new
        if current_user.id == 1
            @post = Post.new
        else
            flash[:warning] = "You do not have permission to create an article."
            redirect_to blog_path
        end
    end

    def create
        @post = Post.new(post_params)
        success = verify_recaptcha(action: 'create_post', minimum_score: 0.5, secret_key: ENV['RECAPTCHA_SECRET_KEY_V3'])
        checkbox_success = verify_recaptcha unless success

        if success || checkbox_success
            create_slug
            if @post.save
                flash[:notice] = "Post successfully created!"
                redirect_to blog_post_path(@post)
                helpers.notify_subscribers(@post)
            else
                render :new
            end
        else
            @show_checkbox_recaptcha = true
            render :new
        end
    end

    def show
        get_post
        @subscriber = Subscriber.new
        render layout: "no-flash"
    end

    def edit
        if current_user.id == 1
            get_post
        else
            flash[:warning] = "You do not have permission to edit this article."
            redirect_to blog_path
        end
    end

    def update
        get_post
        if @post.update(post_params)
            flash[:notice] = "Post updated successfully!"
            redirect_to post_path(@post)
        else
            render :new, status: :unprocessable_entity
        end
    end

    def destroy
        if current_user.id == 1
            get_post
            if @post.destroy
                flash[:warning] = "Post deleted successfully."
                redirect_to blog_path, status: :see_other
            else
                flash[:warning] = "Post deletion failed. Please try again."
                redirect_to edit_post_path(@post), status: :see_other
            end
        else
            flash[:warning] = "You do not have permission to delete this article."
            redirect_to blog_path, status: :see_other
        end
    end

    private
    def post_params
        params.require(:post).permit(:title, :description, 
            :featured_image, :category, :tags, :slug, :user_id, :content)
    end

    def get_post
        @post = Post.find_by_slug(params[:slug])
        @post ||= Post.find(params[:slug])
    end

    def create_slug
        if @post.slug.empty?
            @post.slug = @post.title.parameterize(separator: '-')
        end
    end
end
