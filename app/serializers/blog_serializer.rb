class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content

  belongs_to :author, class_name: "User", foreign_key: :author_id
  belongs_to :blogable, polymorphic: true
end
