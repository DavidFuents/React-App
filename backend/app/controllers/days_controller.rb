class DaysController < ApplicationController
  def show 
    day = Day.find_by(product_id: params[:product_id])
    
    render json: day.to_json(:except => [:updated_at, :created_at])
  end

  def create 
    day = Day.create(day_params)

    render json: day.to_json(:except => [:updated_at, :created_at])
  end

  def destroy
    day = Day.find(params[:id])
    day.destroy
  
    render json: day.products.to_json(:except => [:updated_at, :created_at])
  end  
  
  private
    def day_params
      params.require(:day).permit(:date)
    end
end
