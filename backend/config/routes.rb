Rails.application.routes.draw do

  # REST APIs
  namespace :api do
    namespace :v1 do
      resources :posts, path: '/blog', param: :slug do
        get '/latest_article', on: :collection, to: "posts#latest_article"
      end 
      resources :contact, path: '/contact', only: [:create]
      resources :subscribers, only: [:create, :edit, :destroy]
    end
  end

  # RSS routes
  get '/feed', to: "api/v1/posts#index", format: 'rss'
  get '/blog/feed', to: "api/v1/posts#index", format: 'rss'

end
