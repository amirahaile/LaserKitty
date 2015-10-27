class BotGuisController < ApplicationController
  def find_bot
    Bot.find(session[:bot_id])
  end

  def show
    bot = find_bot
    @bot_status = bot.io
    @bot_controller = bot.controller
  end

  def io
    bot = find_bot
    if bot.io == "off"
      bot.update(io: "on", controller: "browser")
    else
      bot.update(io: "off", controller: "pi")
    end

    redirect_to :back
  end

  def prepare
    bot = find_bot
    response = {
      io: bot.io,
      controller: bot.controller
    }
    render json: response.to_json
  end
end
