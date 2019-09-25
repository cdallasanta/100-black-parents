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
  end
  
end
