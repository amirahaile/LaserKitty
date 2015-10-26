class BotGuisController < ApplicationController
  before_action :require_login

  def prepare
    bot = Bot.find(session[:bot_id])
    status = bot.io
    render json: { io: status }.to_json
  end
end
