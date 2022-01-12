class CreatePhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :photos do |t|
      t.text :path
      t.string :tag
      t.integer :alt
      t.integer :likes
      t.boolean :allow_download
      t.integer :user_id

      t.timestamps
    end
  end
end
