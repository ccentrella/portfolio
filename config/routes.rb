Rails.application.routes.draw do
  root 'pages#home'

  get '/resume', to: 'pages#home'
  get '/interests', to: 'pages#home'
  get '/specialties', to: 'pages#home'
  get '/highlights', to: 'pages#home'
  get '/contact', to: 'pages#homes'

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

  # Define additional paths
  get '/contact', to: "email_contact#new"
  post "/contact_form", to: "email_contact#create", as: "email_contacts"

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

  # Required for contact form
  resources :email_contact, only: [:new, :create]

  resources :resources, path: '/resources'

  # Define root path for blog posts
  direct :blog do
     "/blog"
  end
  
  resources :posts, path: '/blog', param: :slug do
    get '/index/admin', on: :collection, as: 'admin_index', to: "posts#admin_index"
    get '/feed', on: :collection, to: "posts#index", format: 'rss'
  end 

  # Define root path for subscribe
  resources :subscribers, only: [:new, :create]
  get '/subscribers/unsubscribe', to: "subscribers#unsubscribe"
  delete '/subscribers/unsubscribe', to: "subscribers#destroy"

  # Define error path
  match '/404', via: :all, to: 'errors#not_found'
  match '/500', via: :all, to: 'errors#server_error'
end
