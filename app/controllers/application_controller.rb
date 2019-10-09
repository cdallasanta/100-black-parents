class ApplicationController < ActionController::Base
  def fallback_index_html
    render :file => 'public/index.html'
  end

  private

  # Overwriting the sign_out redirect path method
  def after_sign_out_path_for(resource_or_scope)
    root_path
  end
end
