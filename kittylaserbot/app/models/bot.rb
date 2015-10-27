class Bot < ActiveRecord::Base
  include Singleton
  attr_accessor :io_status, :controller

# Associations -----------------------------------------------------------------
  has_one :user

# Methods ----------------------------------------------------------------------
  def prepare
    response = {
      io: @@bot.io_status,
      controller: @@bot.controller
    }
    render json: response.to_json
  end
end
