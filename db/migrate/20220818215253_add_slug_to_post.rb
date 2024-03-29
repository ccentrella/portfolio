class AddSlugToPost < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :slug, :string, limit: 1000

    add_index :posts, :slug, unique: true
  end
end
