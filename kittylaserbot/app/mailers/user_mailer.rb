class UserMailer < ApplicationMailer
  default from: 'register@laserkittybot.com'

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: 'Your invite to kittylaserbot.com has been requested.')
  end
end
