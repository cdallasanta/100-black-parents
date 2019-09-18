ActiveAdmin.register Blog do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :author_id, :title, :content, :blogable_type, :blogable_id
  #
  # or
  #
  # permit_params do
  #   permitted = [:author_id, :title, :content, :blogable_type, :blogable_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  index do
    selectable_column
    id_column
    column :title
    column :author
    column "Association", :blogable
    actions
  end

  filter :blogable_of_District_type_name, as: :string, label: "District"
  filter :blogable_of_School_type_name, as: :string, label: "School"
  filter :author
  filter :title
  filter :content
  
end
