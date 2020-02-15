class ApplicationController < ActionController::Base

  def fallback_index_html
    render :file => 'client/public/index.html'
  end

end
