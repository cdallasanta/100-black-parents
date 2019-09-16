class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.text :title
      t.integer :organizer_id
      t.datetime :start
      t.datetime :end
      t.text :description
      t.boolean :approved
      t.boolean :allDay
      
      t.references :eventable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
