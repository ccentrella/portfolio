Rails.application.routes.draw do
  devise_for :users

  # Define the root path route ("/")
  root "static_pages#home"

  # Define additional paths
  get '/about', to: "static_pages#about"
  get '/mission', to: "static_pages#mission"
  get '/contact', to: "email_contact#new"
  post "/contact_form", to: "email_contact#create", as: "email_contacts"
  get '/blog', to: "posts#index"
  get '/photos', to: "photos#index"

  # Required for contact form
  resources :email_contact, only: [:new, :create]
end
