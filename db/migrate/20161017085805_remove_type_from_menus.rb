class RemoveTypeFromMenus < ActiveRecord::Migration[5.0]
  def change
    remove_column :menus, :type, :string
  end
end
