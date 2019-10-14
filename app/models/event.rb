class Event < ApplicationRecord
  belongs_to :organizer, class_name: "User", foreign_key: :organizer_id, optional: true
  belongs_to :eventable, polymorphic: true

  after_create :set_defaults

  def set_defaults
    self.approved ||= false
    self.location ||= ""
    self.save
  end

  def to_partial_path
    'partials/event'
  end
end
