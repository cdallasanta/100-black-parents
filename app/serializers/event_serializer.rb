class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :start, :end, :description, :approved

  belongs_to :organizer, class_name: "User", foreign_key: :organizer_id, optional: true
  belongs_to :eventable, polymorphic: true

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :name
  end

  class SchoolSerializer < ActiveModel::Serializer
    attributes :id, :name
  end

  class DistrictSerializer < ActiveModel::Serializer
    attributes :id, :name
  end
end
