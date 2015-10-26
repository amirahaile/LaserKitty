class BotGuisController < ApplicationController
  before_action :require_login

  def show
    bot = Bot.find(session[:bot_id])
    @io_status = bot.io
  end

  def prepare
    bot = Bot.find(session[:bot_id])
    status = bot.io
    render json: { io: status }.to_json
  end
end
