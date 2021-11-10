Rails.application.routes.draw do
  resources :categories
  resources :events
  resources :days
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
