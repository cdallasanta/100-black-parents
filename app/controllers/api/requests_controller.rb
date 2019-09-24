class Api::RequestsController < ApiController
  def create
    binding.pry
    Request.create(request_params)
  end

  private

  def request_params
    params.require(:data).permit(
      :user_id,
      :school_id
    )
  end
end
