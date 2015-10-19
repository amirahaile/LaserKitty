class User < ActiveRecord::Base
  has_secure_password # bcrypt

# Validations ------------------------------------------------------------------

# Methods ----------------------------------------------------------------------
  def self.find_or_create_from_omniauth(auth_hash)
    instagram = auth_hash["user"]
    auth_uid = instagram.nil? ? "nil" : instagram["id"]
    auth_provider = instagram.nil? ? "developer" : "instagram"

    user = User.where(
      uid: auth_uid,
      provider: auth_provider).first_or_initialize

    user.uid      = instagram.nil? ? "nil" : instagram["id"]
    user.provider = instagram.nil? ? "developer" : "instagram"
    user.username = instagram.nil? ? auth_hash["info"]["name"] : instagram["username"]

    return user.save ? user : nil
  end

  def self.find_or_create_from_github(auth_hash)
    auth_uid = auth_hash["id"].to_s
    auth_provider = "github"

    # .first_or_initialize not working…
    user = User.where(uid: auth_uid, provider: auth_provider).first_or_initialize

    user.uid = auth_uid
    user.provider = auth_provider
    user.username = auth_hash["username"]
    user.first_name = auth_hash["first_name"]
    user.last_name = auth_hash["last_name"]
    user.email = auth_hash["email"]
    # bcrypt has it's own validations; temp passwords
    user.password = 'github456!!'
    user.password_confirmation = 'github456!!'

    return user.save ? user : nil
  end
end
