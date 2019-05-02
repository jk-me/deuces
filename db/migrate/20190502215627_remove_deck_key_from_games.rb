class RemoveDeckKeyFromGames < ActiveRecord::Migration[5.2]
  def change
    remove_column :games, :deck_key, :string
  end
end
