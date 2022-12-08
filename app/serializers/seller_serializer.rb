class SellerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :review
  has_many :properties
end
