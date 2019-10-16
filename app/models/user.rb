class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, and :trackable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :omniauthable

  has_many :schools, foreign_key: :site_rep_id
  has_many :events, foreign_key: :organizer_id
  has_many :blogs, foreign_key: :author_id
  has_many :requests

  has_one_attached :avatar

  after_create :set_permissions

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0, 20]
      user.name = auth.info.name
      # TODO: user Avatar
      # user.avatar = auth.info.image
    end
  end

  def is_admin?
    self.permissions == "admin"
  end

  def set_permissions
    self.permissions ||= "guest"
    self.save
  end

  def activeadmin_events
    events = Event.all.where("start > ?", Date.today)
    if self.permissions == "admin"
      events
    elsif self.permissions == "site_rep"
      events.where(eventable: self.schools).or(events.where(organizer_id:self.id))
    else
      events.where(organizer_id:self.id)
    end
  end

  def activeadmin_blogs
    if self.permissions == "admin"
      Blog.all
    elsif self.permissions == "site_rep"
      Blog.all.where(blogable: self.schools).or(Blog.all.where(author:self))
    else
      Blog.all.where(author: self)
    end
  end
end
