class GamesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    games = Game.all
    render json: games
  end

  def show
    game = Game.find(params[:id])
    render json: game
  end

  def create
    game = Game.create(game_params)
    render json: game
  end

  def update
    game = Game.find(params[:id])
    game.update(game_params)
    render json: game

  end

  def destroy
    game = Game.find(params[:id])
    game.destroy
    games = Game.all
    render json: games
  end

  private

  def game_params
    params.require(:game).permit(:hand1, :hand2, :total_games)
  end
end
