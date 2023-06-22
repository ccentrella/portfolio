class Api::V1::PostsController < ApplicationController

    protect_from_forgery with: :null_session

    before_action :authenticate_user, only: [:create, :update, :destroy]
    before_action :get_post, only: [:show, :update, :destroy]

    def index
        begin
            @posts = Post.all
            render json: @posts
        rescue
            render json: "Server Error. Blog posts could not be retrieved.", status: 500
        end
    end

    def latest_article
        begin
            @post = Post.first
            render json: @post
        rescue
            render json: "Server Error. Blog post could not be retrieved.", status: 500
        end
    end

    def show
        if @post.nil?
            return render json: "Not Found. Blog post does not exist.", status: 404
        end
        
        render json: @post
    end

    def create
        begin
            @post = Post.new(post_params)
            @post.create_slug
            @post.save
        rescue
            return render json: "Server Error. Blog post could not be created.", status: 500
        end

        begin
            notify_subscribers(@post)
        rescue
            return render json: "Server Error. Failed to notify subscribers.", status: 500
        end

        render json: @post, status: 201
    end

    def update
        if @post.nil?
            return render json: "Not Found. Blog post does not exist.", status: 404
        end

        begin
            @post.update(post_params)
        rescue
            return render json: "Server Error. Blog post could not be updated.", status: 500
        end

        render json: @post, status: 201
    end

    def destroy
        if @post.nil?
            return render json: "Gone. Blog post no longer exists.", status: 410
        end

        begin
            @post.destroy
        rescue
            return render json: "Server Error. Blog post was found, but could not be deleted.", status: 500
        end

        render json: "Blog post deleted successfully", status: 204
    end

    private
    def authenticate_user
        return render json: "Unauthorized. You don’t have the required permissions to perform this operation.", status: 403
    end

    def post_params
        params.require(:post).permit(:title, :description, 
            :featured_image, :category, :tags, :slug, :user_id, :content)
    end

    def get_post
        begin
            @post = Post.find_by_slug(params[:slug])
            @post ||= Post.find_by_id(params[:slug])
        rescue
            return render json: "Server Error. Blog post could not be retrieved.", status: 500
        end
    end

    def notify_subscribers(post)
        for subscriber in Subscriber.all
            unsubscribe_link = subscriber.generate_unsubscribe_link
            subscriber.deliver(post, unsubscribe_link)
        end
    end

end
