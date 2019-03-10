class GamesController < ApplicationController

  def index
    @games = Game.all
    render json: @games
  end

  def show
    @game = Game.find(params[:id])
    render json: @game
  end

  def create
    game = Game.create(game_params)
  end

  def update
    @game = Game.find(params[:id])
    @game = Game.create(game_params)

  end

  def destroy
    @game = Game.find(params[:id])
    @game.destroy
  end

  private

  def game_params
    params.require(:game).permit(:deck_key, :p1wins, :p2wins, :total_games)
  end
end
