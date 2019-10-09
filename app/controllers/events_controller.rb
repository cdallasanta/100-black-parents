class EventsController < ApplicationController
  def index
    render json: Event
      .where(eventable_id: params[:school_id], eventable_type:"School", approved:true)
      .or(Event.where(eventable_id: params[:district_id], eventable_type:"District", approved:true))
  end

  def create
    if params[:school_id]
      eventable = School.find(params[:school_id])
    else
      eventable = District.find(params[:district_id])
    end

    eventData = event_params
    eventData["eventable"] = eventable
    eventData["organizer"] = current_user

    if current_user&.permissions == "admin" || current_user&.schools&.include?(eventable)
      eventData["approved"] = true
    end
    e = Event.create(eventData)
    render json: e
  end

  private

  def event_params
    params.require(:event).permit(:title, :start, :end, :location)
  end
end
