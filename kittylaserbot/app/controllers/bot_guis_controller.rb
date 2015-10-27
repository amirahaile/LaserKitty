class BotGuisController < ApplicationController
  def show
    @bot_status = @@bot.io_status
    @bot_controller = @@bot.controller
  end
end
