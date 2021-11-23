class Day < ApplicationRecord
  has_many :day_events 
  has_many :events, through: :day_events
end
