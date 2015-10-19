class RenameAssociationUser < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.rename :association, :relation
    end
  end
end
