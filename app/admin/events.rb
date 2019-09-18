ActiveAdmin.register Event do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :title, :organizer_id, :start, :end, :description, :approved, :allDay, :eventable_type, :eventable_id
  #
  # or
  #
  # permit_params do
  #   permitted = [:title, :organizer_id, :start, :end, :description, :approved, :allDay, :eventable_type, :eventable_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
  batch_action :approve do |ids|
    batch_action_collection.find(ids).each do |event|
      event.update(approved: true)
    end
    redirect_to collection_path, alert: "The events have been approved."
  end
end
