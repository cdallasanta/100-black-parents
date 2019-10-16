class SchoolsController < ApplicationController
  def index
    render json: School.where(district_id: params[:district_id]).order(:name).to_json(only: [:id, :name, :grade_level])
  end

  def show
    @school = School.find(params[:id])
    @blogs = Blog
      .where(blogable: @school, blogable_type:"School")
      .or(Blog.where(blogable: @school.district, blogable_type:"District"))
    @events = Event
      .where(eventable: @school, eventable_type:"School", approved:true)
        .where("start > ?", Date.today)
        .order('start ASC')
      .or(Event.where(eventable: @school.district, eventable_type:"District", approved:true)
        .where("start > ?", Date.today)
        .order('start ASC')
      )
  end
end
