class CreateSitters < ActiveRecord::Migration
  def change
    create_table :sitters do |t|
      t.string :email
      t.string :name

      t.timestamps null: false
    end
  end
end
