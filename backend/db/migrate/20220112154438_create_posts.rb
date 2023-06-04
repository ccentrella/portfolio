class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.text :content
      t.text :title
      t.text :featured_image
      t.string :category
      t.string :description
      t.string :tags

      t.timestamps
    end
    add_index :posts, [:created_at]
  end
end
