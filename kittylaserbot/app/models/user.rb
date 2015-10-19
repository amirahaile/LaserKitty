class User < ActiveRecord::Base
  has_secure_password # bcrypt

# Validations ------------------------------------------------------------------

# Methods ----------------------------------------------------------------------
  def self.find_or_create_from_omniauth(auth_hash)
    auth_uid = auth_hash["uid"]
    auth_provider = auth_hash["provider"]

    user = User.where(uid: auth_uid,
      provider: auth_provider).first_or_initialize

    user.username = auth_hash["info"]["nickname"]
    user.first_name = auth_hash["info"]["first_name"]
    user.last_name = auth_hash["info"]["last_name"]
    user.email = auth_hash["email"]
    # temporary passwords to pass bcrypt's validation
    user.password = "aoijfeoveoinwe3983984upjf393hf83nf"
    user.password_confirmation = "aoijfeoveoinwe3983984upjf393hf83nf"

    return user.save ? user : nil
  end
end
