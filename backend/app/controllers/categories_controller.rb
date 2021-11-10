class CategoriesController < ApplicationController
  def show 
    category = Category.find_by(product_id: params[:product_id])
    
    render json: category.to_json(:except => [:updated_at, :created_at])
  end

  def create 
    category = Category.create(category_params)

    render json: category.to_json(:except => [:updated_at, :created_at])
  end

  def destroy
    category = Category.find(params[:id])
    category.destroy
  
    render json: category.products.to_json(:except => [:updated_at, :created_at])
  end  
  
  private
    def category_params
      params.require(:category).permit(:name, :color, :day_id, :category_id)
    end
end
