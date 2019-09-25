class Api::RequestsController < ApiController
  before_action :authenticate_user!

  def create
    binding.pry
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
