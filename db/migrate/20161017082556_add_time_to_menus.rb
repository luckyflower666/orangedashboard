class AddTimeToMenus < ActiveRecord::Migration[5.0]
  def change
    add_column :menus, :time, :string
  end
end
