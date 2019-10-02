class Api::EventsController < ApiController
  def index
    render json: Event.where(eventable_id: params[:school_id], eventable_type:"School").or(Event.where(eventable_id: params[:district_id], eventable_type:"District"))
  end
end
