class RemoveRelationUsers < ActiveRecord::Migration
  def change
    remove_column :users, :relation
  end
end
