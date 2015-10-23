class Identity < ActiveRecord::Base
# Associations -----------------------------------------------------------------
  belongs_to :user

# Validations ------------------------------------------------------------------
  validates :provider, presence: true
  validates :uid, presence: true

# Methods ----------------------------------------------------------------------
  def self.find_with_omniauth(auth_hash)
    # returns Identity obj or `nil`
    Identity.find_by(uid: auth_hash['uid'], provider: auth_hash['provider'])
  end

  def self.create_with_omniauth(auth_hash)
    Identity.create(uid: auth_hash['uid'], provider: auth_hash['provider'])
  end
end
