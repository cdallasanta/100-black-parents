class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, 
         :recoverable, :rememberable, :validatable
  
  has_many :schools, foreign_key: :site_rep_id
  has_many :events, foreign_key: :organizer_id
  has_many :blogs, foreign_key: :author_id
  
  has_one_attached :avatar

  after_create :set_permissions

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
