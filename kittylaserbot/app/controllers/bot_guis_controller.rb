class BotGuisController < ApplicationController
  def show
    @bot_status = Bot.status
    @bot_controller = Bot.controller
  end

  def update
    json = JSON.parse(request.body.read)
    $redis.set("status", json["io"])
    $redis.set("controller", json["controller"])

    redirect_to :show
  end
end
