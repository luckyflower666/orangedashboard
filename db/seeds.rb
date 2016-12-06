# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: 'lily', restaurant: 'Hotpot restaurant', password: 123, email: 'lily@hotpot.com', telephone: '63653666')
User.create(name: 'sam', restaurant: 'Noddle restaurant', password: 123, email: 'sam@noddle.com', telephone: '63162566')
User.create(name: 'kim', restaurant: 'Fast express', password: 123, email: 'kim@fast.com', telephone: '83656986')
User.create(name: 'linda', restaurant: 'Old coffee', password: 123, email: 'linda@coffee.com', telephone: '62153689')
User.create(name: 'david', restaurant: 'Traditional snacks', password: 123, email: 'david@snacks.com', telephone: '86321616')
User.create(name: 'James', restaurant: 'Seafood Restaurant', password: 123, email: 'james@seafood.com', telephone: '812357896')
#Menu.create(user_id: 1, name: 'hotpot', restaurant: 'Sunshine restaurant', price: 56.86, discount: 5, sold: 5)