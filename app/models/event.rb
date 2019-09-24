class Event < ApplicationRecord
  belongs_to :organizer, class_name: "User", foreign_key: :organizer_id, optional: true
  belongs_to :eventable, polymorphic: true

  after_create :set_approved_to_false

  def set_approved_to_false
    self.approved ||= false
    self.save
  end
end
