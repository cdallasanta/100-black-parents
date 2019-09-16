class District < ApplicationRecord
  has_many :schools
  has_many :events, as: :eventable
  has_many :blogs, as: :blogable
end
