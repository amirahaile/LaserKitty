class FixBots < ActiveRecord::Migration
  def change
    add_column :bots, :io, :string, default: "off"
    add_column :bots, :user_id, :integer
  end
end
