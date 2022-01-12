Rails.application.routes.draw do
  get '/about', to: "static_pages#about"
  get '/mission', to: "static_pages#mission"
  get '/contact', to: "static_pages#contact"
  get '/blog', to: "posts#index"
  get '/photos', to: "photos#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "static_pages#home"
end
