class CreateTableBots < ActiveRecord::Migration
  def change
    create_table :bots do |t|
      t.string :io_status
      t.string :controller
    end
  end
end
