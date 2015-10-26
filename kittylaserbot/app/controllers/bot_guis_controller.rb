class BotGuisController < ApplicationController
  before_action :require_login

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
      bot.update(io: "on")
    else
      bot.update(io: "off")
    end

    redirect_to :back
  end

  def prepare
    bot = Bot.find(session[:bot_id])
    status = bot.io
    render json: { io: status }.to_json
  end
end
