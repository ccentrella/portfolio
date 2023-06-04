class AddNameToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :name, :string, limit: 100
  end
end
