class CreateSchools < ActiveRecord::Migration[5.2]
  def change
    create_table :schools do |t|
      t.text :name
      t.integer :district_id
      t.integer :site_rep_id

      t.timestamps
    end
  end
end
