class PostsController < ApplicationController
    before_action :authenticate_user!
    skip_before_action :authenticate_user!, only: [:index, :show]

    def index
        @posts = Post.all
    end

    def new
        if current_user.id == 1
            @post = Post.new;
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
        else
            flash[:warning] = "Please enter required fields."
            redirect_to action: 'new'
        end
    end

    def show
        @post = Post.find(params[:id])
    end

    def edit
        if current_user.id == 1
            @post = Post.find(params[:id]);
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
            flash[:warning] = "Post was not updated."
            redirect_to action: 'edit'
        end
    end

    def destroy
        if current_user.id == 1
            @post = Post.find(params[:id]);
        else
            flash[:warning] = "You do not have permission to delete this article."
            redirect_to posts_path
        end
    end

    private
        def post_params
            params.require(:post).permit(:title, :description, 
                :featured_image, :category, :tags, :user_id, :content)
        end
end
