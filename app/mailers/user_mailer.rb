class UserMailer < ApplicationMailer
  def welcome_email
    @user = params[:user]
    @school  = params[:school]
    mail(to: @user.email, subject: 'Site Representative Approval')
  end
end
