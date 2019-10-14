class RequestsController < ApplicationController
  before_action :authenticate_user!

  def create
    req = Request.create(request_params)
    render json: req
  end

  private

  def request_params
    params.require(:request).permit(
      :user_id,
      :school_id,
      :notes
    )
  end
end
