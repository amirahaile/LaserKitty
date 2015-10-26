class ChangeControllerDefaultBots < ActiveRecord::Migration
  def change
    change_column :bots, :controller, :string, default: "pi"
  end
end
