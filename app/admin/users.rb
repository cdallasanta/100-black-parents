ActiveAdmin.register User do
  permit_params :email, :password, :password_confirmation
  menu if: proc{ current_user.permissions == "admin" }

  index do
    selectable_column
    id_column
    column :name
    column :email
    column :schools
    actions
  end

  filter :name
  filter :email

  form do |f|
    f.inputs do
      f.input :email
      f.input :password
      f.input :password_confirmation
    end
    f.actions
  end

end
