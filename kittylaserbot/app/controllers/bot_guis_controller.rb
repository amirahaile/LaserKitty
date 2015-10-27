class BotGuisController < ApplicationController
  def show
    @bot_status = @@bot.io_status
    @bot_controller = @@bot.controller
  end

  def update
    json = JSON.parse(request.body.read)
    @@bot.io_status = json["io"]
    @@bot.controller = json["controller"]

    redirect_to :show
  end
end
