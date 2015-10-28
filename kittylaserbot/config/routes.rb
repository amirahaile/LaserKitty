Rails.application.routes.draw do

  root 'users#index'
  resources :users, except: [:show]

  # OMNIAUTH
  get '/auth/:provider',          to: 'sessions#new',   as: 'auth'
  get '/auth/:provider/callback', to: 'sessions#create'

  get '/logout',                  to: 'sessions#destroy', as: 'logout'

  get '/bot_gui',                 to: 'bot_guis#show',  as: 'bot_gui'

  # for JS to update Bot
  post '/bot_gui',                 to: 'bot_guis#show'
  post '/update_bot',              to: 'bot_guis#update'

  # RaspPi API
  get '/raspi', to: 'bot_guis#prepare'

end
