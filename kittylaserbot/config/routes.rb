Rails.application.routes.draw do

  root 'users#index'

  resources :users, only: [ :new, :create, :destroy ]
  resources :sessions, only: [ :create, :destroy ]

  get 'auth/:provider', to: 'session#new', as: 'auth'
  get 'auth/:provider/callback', to: 'session#create', as: 'callback'
end
