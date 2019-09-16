class Event < ApplicationRecord
  belongs_to :user, class_name: "User", foreign_key: :organizer_id, optional: true
  belongs_to :eventable, polymorphic: true
end
