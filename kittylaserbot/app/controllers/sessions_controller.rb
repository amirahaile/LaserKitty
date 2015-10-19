class SessionsController < ApplicationController
  def create # sign in
    error = params["error"] ? true : false # github error handling

    if error
      @error_code = "400"
      @error_type = params["error"]
      @error_msg  = params["error_description"]
      render 'errors/show'
      return
    end

    # oauth
    @user = User.find_or_create_from_omniauth(auth_hash)

    # manual
    # if !params[:session].nil?
    #   @user = User.find_by(email: params[:session][:email])
    #
    #   unless @user && @user.authenticate(params[:session][:password])
    #     flash[:error] = "Incorrect username or password"
    #     # TODO: @user.errors.messages
    #     redirect_to root_path
    #   end
    # end

    session[:user_id] = @user.id

    redirect_to bot_gui_path
  end

  def destroy # sign out
    reset_session
    redirect_to root_path
  end

  private

  def auth_hash
    request.env['omniauth.auth']
  end
end
