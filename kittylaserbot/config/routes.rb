Rails.application.routes.draw do

  root 'users#index'

  resources :users, only: [ :new, :create, :destroy ]
  resources :sessions, only: [ :create, :destroy ]
end
