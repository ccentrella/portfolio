class CreateSubscribers < ActiveRecord::Migration[7.0]
  def change
    create_table :subscribers do |t|
      t.string :email_address
      t.string :name

      t.timestamps
    end

    add_index :subscribers, [:email_address]
  end
end
