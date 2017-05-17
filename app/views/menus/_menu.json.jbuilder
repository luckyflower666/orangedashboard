json.extract! menu, :id, :user_id, :name, :restaurant, :mtype, :time, :price, :discount, :sold, :image, :created_at, :updated_at
json.url menu_url(menu, format: :json)