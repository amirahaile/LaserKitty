class SessionsController < ApplicationController
  #skip_before_filter :verify_authenticity_token, only: :create

  # This logic allows users to link multiple OAuth identities to their account *while* they're signed in. Doesn't allow the user to link them together if they're signed out. Not a perfect solution, but does help by not creating a new user with every OAuth identity.

  # NOTE: Maybe check for matching emails to link new OAuth identities with a user.

  def create # sign in
    auth = auth_hash
    provider = params[:provider].capitalize

    # FIND IDENTITY
    @identity = Identity.find_with_omniauth(auth)
    # no identity was found? create one
    if @identity.nil? then @identity = Identity.create_with_omniauth(auth) end

    # MANAGES IDENTITIES & USER
    if signed_in?
      if @identity.user == current_user
        # USER IS SIGNED IN & ACCOUNT IS ALREADY LINKED
        msg = "#{provider} account is already linked."
      else
        # USER IS SIGNED IN & LINKED NEW ACCOUNT
        @identity.user = current_user
        @identity.save()
        msg = "Successfully linked #{provider} account."

        # delete associated user if it doesn't have any other identities
        # result of same person creating multiple users
        former_user = @identity.user
        if !former_user.nil? && former_user.identities.length <= 1
          former_user.destroy
        end
      end
    else
      if @identity.user.present?
        # "NORMAL" SIGN IN
        # identity has an associated user
        user = @identity.user
        user.last_login = DateTime.now
        # signing into session
        self.current_user = user

        msg = ""
      else
        # BRAND NEW USER - CREATE USER OBJECT
        user = User.create_from_omniauth(auth)
        @identity.update(user_id: user.id)
        user.update(last_login: DateTime.now)
        # signing into session
        self.current_user = user

        # gives me admin powers
        # NOTE: secure bcuz at this point, User obj only has OAuth info?
        if user.email == "amira.dhaile@gmail.com"
          user.update(invite_status: "accepted")
        end

        # first user will create Singleton instance of bot
        # (ewww, necessary global evil. sorry <3jnf)
        msg = "#{provider} account successfully linked! Please finish registering."
        redirect_to new_user_path, notice: msg
        return
      end
    end

    # first ever user sets initial Redis keys
    Bot.instantiate

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
    current_user.update(last_logout: DateTime.now)
    self.current_user = nil
    redirect_to root_path
  end

  private

  def auth_hash
    request.env['omniauth.auth']
  end
end
