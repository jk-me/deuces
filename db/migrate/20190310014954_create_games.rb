class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :deck_key
      t.integer :p1wins
      t.string :p2wins
      t.integer :total_games

      t.timestamps
    end
  end
end
