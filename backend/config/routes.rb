Rails.application.routes.draw do

  # Authentication routes
  devise_for :users, skip: [:registrations], controllers: {
    sessions: 'users/sessions',
    unlocks: 'users/unlocks',
    passwords: 'users/passwords',
    confirmations: 'users/confirmations',
    # omniauth_callbacks: 'users/omniauth_callbacks',
  }
  devise_scope :user do
    get '/profile', to: "users/admin#home", as: :profile
    get '/users/edit', to: "users/registrations#edit", as: :edit_user_registration
    patch '/users/id', to: "users/registrations#update", as: :user_registration
  end

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
