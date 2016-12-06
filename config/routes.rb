Rails.application.routes.draw do
  resources :menus
  get 'restaurant/home'
  get 'restaurant/login'
  post 'restaurant/checkLogin'
  get 'restaurant/logout'
  get 'restaurant/show'
  get 'restaurant/leafletjs'

  get 'users/new'
  post 'users/create'

  get 'dashboard/index'
  get 'dashboard/gov'
  get 'dashboard/orange'

 

  root :to => 'dashboard#index'


  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
