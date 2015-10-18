class User < ActiveRecord::Base
  has_secure_password # bcrypt

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
    user.avatar_url = instagram.nil? ? "nil" : instagram["profile_picture"]

    return user.save ? user : nil
  end
end
