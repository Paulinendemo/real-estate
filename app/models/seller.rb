class Seller < ApplicationRecord
    has_many :properties
    has_many :buyers, through: :properties
end
