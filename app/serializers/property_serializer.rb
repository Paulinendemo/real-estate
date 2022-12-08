class PropertySerializer < ActiveModel::Serializer
  attributes :id, :image_url, :name,  :address, :price, :description, :seller_id, :buyer_id
  belongs_to :seller
  belongs_to :buyer
end
