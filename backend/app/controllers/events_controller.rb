require 'pry'
class EventsController < ApplicationController
  def index 
    events = Event.all 
    
    render json: events.to_json(:except => [:updated_at, :created_at])
  end

  def show 
    event = Event.find_by(product_id: params[:product_id])
    
    render json: event.to_json(:except => [:updated_at, :created_at])
  end

  def create 
    event = Event.create(event_params)

    render json: event.to_json(:except => [:updated_at, :created_at])
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy
  
    render json: event.products.to_json(:except => [:updated_at, :created_at])
  end  
  
  private
    def event_params
      params.require(:event).permit(:name, :date, :time, :description)
    end
end
