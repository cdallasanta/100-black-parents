ActiveAdmin.register Event do
  # scope_to :current_user, unless: proc{ current_user.permissions == "admin" }
  # scope_to do
  #   Event.all.filter { |e| current_user.schools.include?(e.eventable)}
  # end

  permit_params :title, :organizer_id, :start, :end, :description, :approved, :allDay

  index do
    selectable_column
    id_column
    column :title
    column "Organizer", :user
    column :start
    column :end
    column :approved
    column "Association", :eventable
  
    actions
  end
  
  scope "All Events", if: -> {current_user.permissions == "admin"} do |scope|
    scope
  end
  scope "All Events", if: -> {current_user.permissions == "site_rep"} do |scope|
    scope.filter { |e| current_user.schools.include?(e.eventable)}
  end
  scope("Approved") { |scope| scope.where(approved: true) }
  scope("Not yet approved") { |scope| scope.where(approved: false) }

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
