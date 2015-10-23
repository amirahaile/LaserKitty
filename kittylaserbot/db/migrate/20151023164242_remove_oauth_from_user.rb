class RemoveOauthFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :provider
    remove_column :users, :uid
    change_column :users, :invite_status, :string, default: "pending"
  end
end
