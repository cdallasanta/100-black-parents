Rails.application.routes.draw do
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  default_url_options :host => "localhost:3000"

  root to: 'homepage#index'

  namespace :api do
    resources :events
    resources :blogs
    resources :users do 
      get :avatar, on: :member
    end
    resources :requests, only: [:create]

    resources :districts do
      resources :schools
    end
  end

  # This is for using React Router on heroku, it defaults to using the index.html file in the client
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
