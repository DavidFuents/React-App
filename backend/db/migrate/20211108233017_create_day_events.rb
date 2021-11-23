class CreateDayEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :day_events do |t|
      t.integer :day_id
      t.integer :event_id
      
      t.timestamps
    end
  end
end
