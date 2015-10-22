class AddInviteStatusUsers < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.string :invite_status
      t.string :status_msg
    end
  end
end
