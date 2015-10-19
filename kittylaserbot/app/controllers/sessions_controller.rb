class SessionsController < ApplicationController

  def new
    if params[:provider] == "instagram"
      HTTParty.get("https://api.instagram.com/oauth/authorize?client_id=#{ENV['INSTAGRAM_CLIENT_ID']}&redirect_uri=#{ENV['INSTAGRAM_REDIRECT_URI']}&response_type=code")
    end
  end

  def create # sign in
    # github error handling
    error = params["error"] ? true : false
    if error
      @error_code = "400"
      @error_type = params["error"]
      @error_msg  = params["error_description"]
      render 'errors/show'
      return
    else
      code = params[:code]
    end

    # oauth
    if params[:provider] == 'instagram'
      response = HTTParty.post("https://api.instagram.com/oauth/access_token?client_id=#{ENV['INSTAGRAM_CLIENT_ID']}&client_secret=#{ENV['INSTAGRAM_CLIENT_SECRET']}&grant_type=authorization_code&redirect_uri=#{ENV['INSTAGRAM_REDIRECT_URI']}&code=#{code}").parsed_response
      error = response["error_type"] ? true : false

      if error
        @error_code = response["code"]
        @error_type = response["error_type"]
        @error_msg  = response["error_message"]
        render 'errors/show'
        return
      else
        session[:access_token] = response.access_token
        @user = User.find_or_create_from_omniauth(response) # Returns usr obj/nil
      end
    else # github
      # code = params[:code]
      query = { "client_id" => ENV['GITHUB_CLIENT_ID'],
                "client_secret" => ENV['GITHUB_CLIENT_SECRET'],
                "code" => code }
      headers = { "accept" => "application/json" }
      response = HTTParty.post("https://github.com/login/oauth/access_token", :query => query, :headers => headers).parsed_response

      session[:access_token] = response["access_token"]
      @user = grab_github_user(response["access_token"])
    end

    # manual
    if !params[:session].nil?
      @user = User.find_by(email: params[:session][:email])

      unless @user && @user.authenticate(params[:session][:password])
        flash[:error] = "Incorrect username or password"
        # TODO: @user.errors.messages
        redirect_to root_path
      end
    end

    session[:user_id] = @user.id

    redirect_to bot_gui_path
  end

  def destroy # sign out
    reset_session
    redirect_to root_path
  end

  private

  def grab_github_user(token)
    query = { "client_id" => ENV['GITHUB_CLIENT_ID'],
              "client_secret" => ENV['GITHUB_CLIENT_SECRET']}
    headers = { "User-Agent" => "Kitty-Laser-Bot", "Authorization" => "token " + token }
    response = HTTParty.get("https://api.github.com/user", :query => query, :headers => headers).parsed_response

    name = response["name"].split(" ")
    auth_hash = {
      "id" => response["id"],
      "username" => response["login"],
      "first_name" => name[0],
      "last_name" => name[1],
      "email" => response["email"]
    }

    User.find_or_create_from_github(auth_hash)
  end
end
