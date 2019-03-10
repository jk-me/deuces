# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

g1 = Game.create({deck_key: 'abc', p1wins: 2, p2wins: 3, total_games: 5})
g2 = Game.create({deck_key: 'sdf', p1wins: 1, p2wins: 1, total_games: 2})
