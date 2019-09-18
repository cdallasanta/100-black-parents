ActiveAdmin.register Event do
  permit_params :title, :organizer_id, :start, :end, :description, :approved, :allDay

  index do
    selectable_column
    id_column
    column :title
    column :user
    column :start
    column :end
    column :approved
    column "Association", :eventable
    actions
  end

  filter :eventable_of_District_type_name, as: :string, label: "District"
  filter :eventable_of_School_type_name, as: :string, label: "School"
  filter :user
  filter :title
  filter :start
  filter :end
  filter :description
  filter :approved
  
  batch_action :approve do |ids|
    batch_action_collection.find(ids).each do |event|
      event.update(approved: true)
    end
    redirect_to collection_path, alert: "The events have been approved."
  end
end
