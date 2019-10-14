ActiveAdmin.register Request do
  menu if: proc{ current_user.permissions == "admin" }
  permit_params :user_id, :school_id, :notes

  index do
    selectable_column
    column :school
    column :user
    column :notes
    actions
  end

  batch_action :approve do |ids|
    batch_action_collection.find(ids).each do |request|
      newRep = User.find(request.user_id)
      School.find(request.school_id).update(site_rep: newRep)
      if newRep.permissions == "guest"
        newRep.update(permissions: "site_rep")
      end

      # TODO send email with confirmation

      request.destroy
    end
    redirect_to collection_path, alert: "The requests have been approved."
  end  
end
