Rails.application.routes.draw do

  root 'users#index'

  resources :users, only: [ :new, :create, :show, :destroy ]

  get 'auth/:provider',          to: 'sessions#new',   as: 'auth'
  get 'auth/:provider/callback', to: 'sessions#create' 
  get 'bot_gui',                 to: 'bot_guis#show',  as: 'bot_gui'
end
