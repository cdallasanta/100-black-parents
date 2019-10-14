class SchoolsController < ApplicationController
  def index
    render json: School.where(district_id: params[:district_id]).order(:name).to_json(only: [:id, :name, :grade_level])
  end

  def show
    @school = School.find(params[:id])
  end
end
