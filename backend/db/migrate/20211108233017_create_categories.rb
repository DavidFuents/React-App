class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.string :name
      t.string :color
      t.integer :day_id
      t.integer :event_id
      
      t.timestamps
    end
  end
end
