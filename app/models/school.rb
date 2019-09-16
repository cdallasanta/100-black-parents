class School < ApplicationRecord
  belongs_to :district
  belongs_to :site_rep, class_name: "User", foreign_key: :site_rep_id, optional: true
  
  has_many :events, as: :eventable
  has_many :blogs, as: :blogable
end
