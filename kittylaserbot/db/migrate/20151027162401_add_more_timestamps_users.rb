class AddMoreTimestampsUsers < ActiveRecord::Migration
  def change
    add_column :users, :last_login, :datetime
    add_column :users, :last_logout, :datetime
  end
end
