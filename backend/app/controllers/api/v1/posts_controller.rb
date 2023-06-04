class Api::V1::PostsController < ApplicationController
    before_action :authenticate_user!
    skip_before_action :authenticate_user!, only: [:index, :show, :latest_article]
    before_action :get_post, only: [:edit, :update, :destroy]

    def index
        @posts = Post.all
        render json: @posts
    end

    def latest_article
        @post = Post.first
        render json: @post
    end

    def show
        @post = Post.find_by_slug(params[:slug])
        @post ||= Post.find(params[:slug])
        
        if @post
            render json: @post
        else
            render json: @post.errors
        end
    end

    def new
       @post = new_post
    end

    def edit
    end

    def create
        @post = Post.new(post_params)
        success = verify_recaptcha(action: 'create_post', minimum_score: 0.5, secret_key: ENV['RECAPTCHA_SECRET_KEY_V3'])
        checkbox_success = verify_recaptcha unless success

        if success || checkbox_success
            create_slug
            if @post.save
                render json: @post
                helpers.notify_subscribers(@post)
            else
                render json: @post.errors
            end
        else
            @show_checkbox_recaptcha = true
            render :new
        end
    end


    def update
        if @post && @post.update(post_params)
            flash[:notice] = "Post updated successfully!"
            redirect_to blog_path(@post)
        else
            render :new, status: :unprocessable_entity
        end
    end

    def destroy
        if @post && @post.destroy
            render json: { notice: "Post deleted successfully." }
        else
            render json: { notice: "Post deletion failed. Please try again." }
        end
    end

    private
    def post_params
        params.require(:post).permit(:title, :description, 
            :featured_image, :category, :tags, :slug, :user_id, :content)
    end

    def get_post
        if current_user.id == 1
            @post = Post.find_by_slug(params[:slug])
            @post ||= Post.find(params[:slug])
        else
            @post = Post.new
            @post.errors.add(:base, "You do not have the required permission. Please sign in to continue.")
        end
    end

    def new_post
        @post = Post.new
        if current_user.id != 1
            @post.errors.add(:base, "You do not have the required permission. Please sign in to continue.")
        end
    end

    def create_slug
        if @post.slug.empty?
            @post.slug = @post.title.parameterize(separator: '-')
        end
    end
end
