class Category < ApplicationRecord
  belongs_to :day
  belongs_to :event
end
