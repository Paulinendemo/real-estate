class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :image_url
      t.string :nameaddress
      t.string :price
      t.string :description
      t.string :seller_id
      t.string :buyer_id

      t.timestamps
    end
  end
end
