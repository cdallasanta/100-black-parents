class AddAttrsToSchools < ActiveRecord::Migration[5.2]
  def change
    add_column :schools, :homepage_url, :text
    add_column :schools, :address, :text
    add_column :schools, :phone, :text
    add_column :schools, :grade_level, :text
  end
end
