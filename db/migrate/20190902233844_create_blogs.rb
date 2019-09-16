class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.integer :author_id
      t.text :title
      t.text :content

      t.references :blogable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
