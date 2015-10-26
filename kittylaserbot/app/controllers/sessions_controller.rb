class SessionsController < ApplicationController
  #skip_before_filter :verify_authenticity_token, only: :create

  # This logic allows users to link multiple OAuth identities to their account *while* they're signed in. Doesn't allow the user to link them together if they're signed out. Not a perfect solution, but does help by not creating a new user with every OAuth identity.

  # NOTE: Maybe check for matching emails to link new OAuth identities with a user.

  def create # sign in
    auth = auth_hash
    provider = params[:provider].capitalize

    # find identity
    @identity = Identity.find_with_omniauth(auth)

    if @identity.nil?
      # no identity was found; create one
      @identity = Identity.create_with_omniauth(auth)
    end

    # takes care of identities & user objects
    if signed_in?
      if @identity.user == current_user
        # signed in user tried to link an already linked account
        msg = "#{provider} account is already linked."
      else
        # delete associated user if it doesn't have any other identities
        # result of same person creating multiple users
        former_user = @identity.user
        if !former_user.nil? && former_user.identities.length <= 1
          former_user.destroy
        end

        # associate the new identity with signed in user
        @identity.user = current_user
        @identity.save()
        msg = "Successfully linked #{provider} account."
      end
    else
      if @identity.user.present?
        # identity has an associated user; sign in like normal
        self.current_user = @identity.user # signing into session
        msg = ""
      else
        # no user associated; create a new one
        user = User.create_from_omniauth(auth)
        session[:user_id] = user.id # signing into session
        @identity.user = user

        msg = "#{provider} account successfully linked! Please finish registering."
        redirect_to new_user_path, notice: msg
        return
      end
    end

    # creats a bot for RaspPi requests
    bot = Bot.create()
    bot.user = User.find(session[:user_id])
    session[:bot_id] = bot.id

    # redirect/render views
    case current_user.invite_status
    when "accepted"
      redirect_to bot_gui_path, notice: msg
    when "pending"
      render :request_pending
    when "rejected"
      render :request_rejected
    else
      render :request_pending
    end
  end

  def destroy # sign out
    Bot.destroy_all
    self.current_user = nil
    redirect_to root_path
  end

  private

  def auth_hash
    request.env['omniauth.auth']
  end
end
