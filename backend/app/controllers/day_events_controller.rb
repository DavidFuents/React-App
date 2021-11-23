class DayEventsController < ApplicationController
  def show 
    day_event = DayEvent.find(:all, day_id: params[:id])
    
    render json: day_event.to_json(:except => [:updated_at, :created_at])
  end

  def create 
    day_event = DayEvent.create(day_event_params)

    render json: day_event.to_json(:except => [:updated_at, :created_at])
  end

  private
    def day_event_params
      params.require(:day_event).permit(:day_id, :event_id)
    end
end
