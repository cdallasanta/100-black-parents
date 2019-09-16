class Api::SchoolsController < ApiController
  def index
    render json: School.where(district_id: params[:district_id]).order(:name).to_json(only: [:id, :name, :grade_level])
  end

  def show
    render json: School.find(params[:id])
  end
end
