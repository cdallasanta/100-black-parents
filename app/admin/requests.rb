ActiveAdmin.register Request do
  menu if: proc{ current_user.permissions == "admin" }

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :user_id, :school_id
  #
  # or
  #
  # permit_params do
  #   permitted = [:user_id, :school_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  index do
    selectable_column
    column :school
    column :user
    actions
  end

  batch_action :approve do |ids|
    batch_action_collection.find(ids).each do |request|
      newRep = User.find(request.user_id)
      School.find(request.school_id).update(site_rep: newRep)
      if newRep.permissions == "guest"
        newRep.update(permissions: "site_rep")
      end

      request.destroy
    end
    redirect_to collection_path, alert: "The requests have been approved."
  end

  batch_action :delete do |ids|
    batch_action_collection.find(ids).each do |request|
      request.destroy
    end
    redirect_to collection_path, alert: "The requests have been deleted."
  end
  
end
