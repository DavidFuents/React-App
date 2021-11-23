class DayEvent < ApplicationRecord
  belongs_to :day
  belongs_to :event
end
