class AddNotesToRequests < ActiveRecord::Migration[5.2]
  def change
    add_column :requests, :notes, :string
  end
end
