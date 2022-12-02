class Property < ApplicationRecord
    belongs_to :seller
    belongs_to :buyer

    validates :name, presence: true
    validates :address, uniqueness: true
    validates :price, numericality: { greater_than: 200000 }
end
