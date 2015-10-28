class BotGuisController < ApplicationController
  def show
    @bot_status = Bot.status
    @bot_controller = Bot.controller
  end

  def update
    json = JSON.parse(request.body.read)
    $redis.set("status", json["io"])
    $redis.set("controller", json["commander"])

    redirect_to :show
  end

  def prepare
    response = { io: Bot.status, controller: Bot.controller }
    render json: response.to_json
  end
end
