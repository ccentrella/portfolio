Rails.application.routes.draw do
  get 'static_pages/about'
  get 'static_pages/mission'
  get 'static_pages/contact'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "static_pages#home"
end
