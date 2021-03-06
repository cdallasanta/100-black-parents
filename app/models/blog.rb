class Blog < ApplicationRecord
  belongs_to :author, class_name: "User", foreign_key: :author_id
  belongs_to :blogable, polymorphic: true
  
  def to_partial_path
    'partials/blog'
  end
end
