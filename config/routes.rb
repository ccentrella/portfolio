Rails.application.routes.draw do
  devise_for :users
  get '/user/home', to: "users#home", as: :user_root

  # Define the root path route ("/")
  root "static_pages#home"

  # Define additional paths
  get '/about', to: "static_pages#about"
  get '/resume', to: "resources#resume"
  get '/mission', to: "static_pages#mission"
  get '/contact', to: "email_contact#new"
  post "/contact_form", to: "email_contact#create", as: "email_contacts"
  get '/photos', to: "photos#index"

  # Define external URLs
  direct :github do
    "https://github.com/ccentrella"
  end

  direct :linkedin do
    "https://linkedin.com/in/ccentrella/"
  end

  # Required for contact form
  resources :email_contact, only: [:new, :create]

  resources :resources, path: '/resources'

  # Define root path for blog posts
  resources :posts, path: '/blog'

end
