class PropertySerializer < ActiveModel::Serializer
  attributes :id, :image_url, :name,  :address, :price, :description, :seller_id, :buyer_id
end
