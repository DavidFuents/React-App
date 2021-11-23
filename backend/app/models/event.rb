class Event < ApplicationRecord
  has_many :day_events 
  has_many :days, through: :day_events
end
