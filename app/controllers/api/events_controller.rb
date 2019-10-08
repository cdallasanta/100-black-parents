class Api::EventsController < ApiController
  def index
    render json: Event
      .where(eventable_id: params[:school_id], eventable_type:"School", approved:true)
      .or(Event.where(eventable_id: params[:district_id], eventable_type:"District", approved:true))
  end

  def create
    binding.pry
  end
end
