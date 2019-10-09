Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  devise_for :users

  default_url_options :host => "localhost:3000"

  root to: 'homepage#index'

  resources :blogs
  resources :users do 
    get :avatar, on: :member
  end
  resources :requests, only: [:create]

  resources :districts do
    resources :schools do
      resources :events, only: [:index, :create]
    end
  end
end
