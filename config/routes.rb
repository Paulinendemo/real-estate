Rails.application.routes.draw do
  
  resources :properties, only: [:index, :show, :create, :update, :destroy]
  resources :buyers, only: [:index, :show, :create, :destroy]
  resources :sellers, only: [:index, :show, :create, :update, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
