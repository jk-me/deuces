class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :deck_key
      t.integer :hand1
      t.integer :hand2
    end
  end
end
