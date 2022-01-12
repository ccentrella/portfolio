Rails.application.routes.draw do
  devise_for :users
  # Define the root path route ("/")
  root "static_pages#home"

  # Define additional paths
  get '/about', to: "static_pages#about"
  get '/mission', to: "static_pages#mission"
  get '/contact', to: "static_pages#contact"
  get '/blog', to: "posts#index"
  get '/photos', to: "photos#index"
end
