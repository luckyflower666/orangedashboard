class CreateMenus < ActiveRecord::Migration[5.0]
  def change
    create_table :menus do |t|
      t.belongs_to :user, foreign_key: true
      t.string :name
      t.string :restaurant
      t.float :price
      t.float :discount
      t.integer :sold

      t.timestamps
    end
  end
end
