ActiveAdmin.register Blog do
  scope_to :current_user, association_method: :activeadmin_blogs

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

  config.sort_order = 'created_at_asc'
  index do
    selectable_column
    column :title
    column :author
    column "Association", :blogable
    column "Posted on", :created_at
    actions
  end

  scope "All Blogs", if: proc{ current_user.permissions == "admin" } do |scope|
    scope
  end
  scope("My schools' blogs") { |scope| scope.where(blogable: current_user.schools) }
  scope("My blogs") { |scope| scope.where(author: current_user) }

  # This first filter is currently not needed, since we only have one district
  # filter :blogable_of_District_type_name, as: :string, label: "District"
  filter :blogable_of_School_type_name, as: :string, label: "School"
  filter :author_name, as: :string
  filter :title
  filter :content
end
