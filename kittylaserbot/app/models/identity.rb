class Identity < ActiveRecord::Base
# Associations -----------------------------------------------------------------
  belongs_to :user
  
# Validations ------------------------------------------------------------------
  validate :provider, presence: true
  validate :uid, presence: true

# Methods ----------------------------------------------------------------------
  def self.find_with_omniauth(auth_hash)
    # returns Identity obj or `nil`
    find_by(uid: auth_hash['uid'], provider: auth_hash['provider'])
  end

  def self.create_with_omniauth(auth_hash)
    create(uid: auth_hash['uid'], provider: auth_hash['provider'])
  end
end
