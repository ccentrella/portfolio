Rails.application.routes.draw do
  root 'pages#home'

  get '/resume', to: 'pages#home'
  get '/interests', to: 'pages#home'
  get '/specialties', to: 'pages#home'
  get '/highlights', to: 'pages#home'
  get '/contact', to: 'pages#home'
  get '/blog', to: 'pages#home'

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
  # Define the root path route ("/")
  # root "static_pages#home"
  get '/feed', to: "posts#index", format: 'rss'

  # Define external URLs
  direct :github do
    "https://github.com/ccentrella"
  end

  direct :linkedin do
    "https://linkedin.com/in/ccentrella/"
  end

  direct :photos do
    "https://lightroom.adobe.com/gallery/35c62e7ff3ce476f9ae5b07994eb6f15"
  end

  resources :resources, path: '/resources'
  
  resources :posts, path: '/blog', only: [:new, :create, :edit, :update, :destroy], param: :slug do
    get '/index/admin', on: :collection, as: 'admin_index', to: "posts#admin_index"
    get '/feed', on: :collection, to: "posts#index", format: 'rss'
  end 

  namespace :api do
    namespace :v1 do
      resources :posts, path: '/blog', only: [:index, :show], param: :slug do
        get '/latest_article', on: :collection, to: "posts#latest_article"
      end 
      resources :contact, path: '/contact', only: [:create]
      resources :subscribers, only: [:create, :edit, :destroy]
    end
  end
  get '/blog/:slug', to: 'pages#home'
  get '/subscribers/:id/edit', to: 'pages#home'

  # Define error path
  match '/404', via: :all, to: 'errors#not_found'
  match '/500', via: :all, to: 'errors#server_error'
end
