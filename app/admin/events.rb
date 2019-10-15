ActiveAdmin.register Event do
  scope_to :current_user, association_method: :activeadmin_events

  permit_params :title, :organizer_id, :start, :end, :location, :eventable

  config.sort_order = 'start_asc'
  index title: "Upcoming Events" do
    selectable_column
    column :title
    column :organizer
    column :start
    column :end
    column :approved
    column "Association", :eventable
  
    actions
  end
  
  scope "All Events", if: proc{ current_user.permissions == "admin" } do |scope|
    scope
  end
  scope("My schools' events") { |scope| scope.where(eventable: current_user.schools) }
  scope("Approved") { |scope| scope.where(approved: true) }
  scope("Not yet approved") { |scope| scope.where(approved: false) }

  # TODO This filter is currently not needed, since we only have one district
  # filter :eventable_of_District_type_name, as: :string, label: "District"
  filter :eventable_of_School_type_name, as: :string, label: "School"
  filter :organizer_name, as: :string
  filter :title
  filter :start
  filter :end
  filter :location
  filter :approved
  
  batch_action :approve do |ids|
    batch_action_collection.find(ids).each do |event|
      event.update(approved: true)
    end
    redirect_to collection_path, alert: "The events have been approved."
  end

  batch_action :disapprove do |ids|
    batch_action_collection.find(ids).each do |event|
      event.update(approved: false)
    end
    redirect_to collection_path, alert: "The events have been disapproved."
  end

  form do |f|
    tabs do
      tab 'My Schools' do
        semantic_errors
        f.inputs do
          input :title
          input :start, label: "Start date and time", as: :datetime_picker
          input :end, label: "End date and time", as: :datetime_picker
          input :location
          input :eventable, collection: current_user.schools, label: "Organization"
        end
        actions
      end

      tab 'Admin', if: (current_user.is_admin?) do
        semantic_errors
        f.inputs do
          input :title
          input :start, label: "Start date and time", as: :datetime_picker
          input :end, label: "End date and time", as: :datetime_picker
          input :location
          input :eventable_type, as: :select, collection: ["District", "School"], label: "Organization type"
          input :eventable, collection: District.all + School.all.sort_by{|s|s.name}, label: "Organization"
        end
        actions
      end
    end
  end

  controller do
    def create
      binding.pry
    end
  end
end
