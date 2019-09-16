class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :email, :permissions, :avatar_url

  has_many :schools, foreign_key: :site_rep_id
  has_many :events, foreign_key: :organizer_id
  has_many :blogs, foreign_key: :author_id

  def avatar_url
    variant = object.avatar.variant(resize: "100x100")
    return url_for(variant)
  end
end
