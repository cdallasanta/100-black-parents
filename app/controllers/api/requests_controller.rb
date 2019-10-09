class Api::RequestsController < ApiController
  before_action :authenticate_user!

  def index
    binding.pry
  end

  def create
    params["user_id"] ||= current_user.id
    req = Request.create(request_params)
    render json: req
  end

  private

  def request_params
    params.permit(
      :user_id,
      :school_id
    )
  end
end
