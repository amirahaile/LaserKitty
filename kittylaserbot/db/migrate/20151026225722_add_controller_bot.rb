class AddControllerBot < ActiveRecord::Migration
  def change
    add_column :bots, :controller, :string, default: "browser"
  end
end
