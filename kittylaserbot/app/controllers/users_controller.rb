class UsersController < ApplicationController
  def new
    @user = User.find(session[:user_id])
  end

  def edit
    @user = User.find(params[:id])
    @users = User.all
    @count = 1
  end

  def update
    user_id = session[:user_id]
    User.update(user_id, user_params)
    user = User.find(user_id)

    if user.invite_status == "pending"
      render "sessions/request_pending"
    elsif user.invite_status == "rejected"
      render "sessions/request_rejected"
    else
      redirect_to :back
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end
