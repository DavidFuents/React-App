require 'pry'

class DaysController < ApplicationController
  def show 
    day = Day.find_by(id: params[:id])
    events = day.events

    render json: events.to_json(:except => [:updated_at, :created_at])
  end

  def create 
    day = Day.find_or_create_by(day_params)

    render json: day.to_json(:except => [:updated_at, :created_at])
  end

  def destroy
    day = Day.find(day_params[:id])
    day.destroy
  
    render json: day.products.to_json(:except => [:updated_at, :created_at])
  end  
  
  private
    def day_params
      params.require(:day).permit(:id, :date)
    end
end
