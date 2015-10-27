class DropTableBot < ActiveRecord::Migration
  def change
    drop_table :bots
    remove_column :users, :bot_id
  end
end
