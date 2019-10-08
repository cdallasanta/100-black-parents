class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title
      t.integer :organizer_id
      t.datetime :start
      t.datetime :end
      t.string :location
      t.boolean :approved
      
      t.references :eventable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
