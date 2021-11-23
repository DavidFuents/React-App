Rails.application.routes.draw do
  resources :day_events
  resources :events
  resources :days
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
