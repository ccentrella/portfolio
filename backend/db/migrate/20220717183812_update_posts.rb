class UpdatePosts < ActiveRecord::Migration[7.0]
  def change
    change_column :posts, :title, :string, limit: 5500
    change_column :posts, :featured_image, :string, limit: 5500
    change_column :posts, :description, :text
  end
end
