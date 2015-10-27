class UsersController < ApplicationController
  def new
    @user = User.find(session[:user_id])
  end

  def edit
    @user = User.find(params[:id])
    @users = User.all
    @count = 1

    providers = @user.identities.select { |identity| identity.provider }
    @facebook = providers.include?("facebook") ? "facebook_light" : "facebook"
    @github = providers.include?("github") ? "github_light" : "github"
    @twitter = providers.include?("twitter") ? "twitter_light" : "twitter"
  end

  def update
    user = User.find(session[:user_id])
    user.update(user_params)

    if user.invite_status == "pending"
      render "sessions/request_pending"
    elsif user.invite_status == "rejected"
      render "sessions/request_rejected"
    elsif user.invite_status == "accepted"
      render "bot_guis/show"
    else
      redirect_to :back
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end
