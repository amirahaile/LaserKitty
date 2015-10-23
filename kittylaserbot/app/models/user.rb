class User < ActiveRecord::Base
# Associations -----------------------------------------------------------------
  has_secure_password # bcrypt
  has_many :identities

# Validations ------------------------------------------------------------------
  validates :email, presence: true, uniqueness: true

# Methods ----------------------------------------------------------------------
  def self.create_from_omniauth(auth_hash)
    user = User.new

    user.username = auth_hash["info"]["nickname"]
    user.first_name = auth_hash["info"]["first_name"]
    user.last_name = auth_hash["info"]["last_name"]
    user.email = auth_hash["info"]["email"]
    # temporary passwords to pass bcrypt's validation
    user.password = "aoijfeoveoinwe3983984upjf393hf83nf"
    user.password_confirmation = "aoijfeoveoinwe3983984upjf393hf83nf"

    return user.save ? user : nil
  end
end
