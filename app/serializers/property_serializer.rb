class PropertySerializer < ActiveModel::Serializer
  attributes :id, :image_url, :nameaddress, :price, :description, :seller_id, :buyer_id
end
