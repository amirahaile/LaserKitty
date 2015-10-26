Rails.application.routes.draw do

  root 'users#index'
  resources :users, except: [:show]

  # omniauth
  get '/auth/:provider',          to: 'sessions#new',   as: 'auth'
  get '/auth/:provider/callback', to: 'sessions#create'
  # sessions
  get '/logout',                  to: 'sessions#destroy', as: 'logout'
  # GUI
  get '/bot_gui',                 to: 'bot_guis#show',  as: 'bot_gui'
  # potentially a post request
  get '/power_bot',               to: 'bot_guis#io'

  # RaspPi API
  get '/raspi', to: 'bot_guis#prepare'

end
