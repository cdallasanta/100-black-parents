class Api::RequestsController < ApiController
  def create
    r = Request.create(request_params)
    render json: r
  end

  private

  def request_params
    params.permit(
      :user_id,
      :school_id
    )
  end
end
