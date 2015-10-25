Rails.application.routes.draw do

  root 'users#index'
  resources :users

  # omniauth
  get '/auth/:provider',          to: 'sessions#new',   as: 'auth'
  get '/auth/:provider/callback', to: 'sessions#create'
  # sessions
  get '/logout',                  to: 'sessions#destroy', as: 'logout'
  # GUI
  get '/bot_gui',                 to: 'bot_guis#show',  as: 'bot_gui'

end
