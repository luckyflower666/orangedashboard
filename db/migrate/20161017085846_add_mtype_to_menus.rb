class AddMtypeToMenus < ActiveRecord::Migration[5.0]
  def change
    add_column :menus, :mtype, :string
  end
end
