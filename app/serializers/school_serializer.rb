class SchoolSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  
  attributes :id, :name, :grade_level, :address, :phone, :homepage_url, :blogs, :events, :site_rep

  belongs_to :district
  def site_rep
    if object.site_rep
      variant = object.site_rep.avatar.variant(resize: "100x100")
      return {
        name: object.site_rep.name,
        email: object.site_rep.email,
        avatar_url: url_for(variant)
      }
    else
      return nil
    end
  end

  def blogs
    [*object.blogs, *object.district.blogs]
  end
  
  def events
    [*object.events, *object.district.events]
  end

  
end
