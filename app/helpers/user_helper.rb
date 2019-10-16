module UserHelper
  def user_avatar(user, size=40)
    user.avatar.variant(resize: "#{size}x#{size}!")
  end
end