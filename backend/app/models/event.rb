class Event < ApplicationRecord
  has_many :categories 
  has_many :days, through: :categories
end
