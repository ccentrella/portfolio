Rails.application.routes.draw do
  get '/about', to: "static_pages#about"
  get '/mission', to: "static_pages#mission"
  get '/contact', to: "static_pages#contact"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "static_pages#home"
end
