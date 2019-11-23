Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  default_url_options :host => "localhost:3000"

  # TODO will need to change this once other districts are added
  root :to => redirect('/districts/1')

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
