ActiveAdmin.register School do
  scope_to :current_user, unless: proc{ current_user.permissions == "admin" }

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :name, :district_id, :site_rep_id, :homepage_url, :address, :phone, :grade_level
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :district_id, :site_rep_id, :homepage_url, :address, :phone, :grade_level]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
  config.sort_order = 'name_asc'
  index do
    selectable_column
    column :name
    column :grade_level
    column :district
    column :site_rep
  end
  
  scope "All Schools", if: -> {current_user.permissions == "admin"} do |scope|
    scope
  end
  scope("My Schools") { |scope| scope.where(site_rep: current_user) }

  filter :name
  filter :grade_level, as: :select
  filter :site_rep_name, as: :string
end
