class PostsController < ApplicationController
    before_action :authenticate_user!
    skip_before_action :authenticate_user!, only: [:index, :show]

    def index
        @posts = Post.all
        @subscriber = Subscriber.new
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
            redirect_to posts_path
        end
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            flash[:notice] = "Post successfully created!"
            redirect_to post_path(@post)
            helpers.notify_subscribers(@post)
        else
            render :new, status: :unprocessable_entity
        end
    end

    def show
        @post = Post.find(params[:id])
        @subscriber = Subscriber.new
        render layout: "no-flash"
    end

    def edit
        if current_user.id == 1
            @post = Post.find(params[:id])
        else
            flash[:warning] = "You do not have permission to edit this article."
            redirect_to posts_path
        end
    end

    def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
            flash[:notice] = "Post updated successfully!"
            redirect_to post_path(@post)
        else
            render :new, status: :unprocessable_entity
        end
    end

    def destroy
        if current_user.id == 1
            @post = Post.find(params[:id])
            if @post.destroy
                flash[:warning] = "Post deleted successfully."
                redirect_to posts_path, status: :see_other
            else
                flash[:warning] = "Post deletion failed. Please try again."
                redirect_to edit_post_path(@post), status: :see_other
            end
        else
            flash[:warning] = "You do not have permission to delete this article."
            redirect_to posts_path, status: :see_other
        end
    end

    private
        def post_params
            params.require(:post).permit(:title, :description, 
                :featured_image, :category, :tags, :user_id, :content)
        end
end
