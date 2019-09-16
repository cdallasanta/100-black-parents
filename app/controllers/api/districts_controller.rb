class Api::DistrictsController < ApiController
  def show
    render json: District.find(params[:id])
  end
end
