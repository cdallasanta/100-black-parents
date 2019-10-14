module ContactHelper
  def contactOrForm(school)
    if school.site_rep
      return content_tag(:div, "<strong>Rep Name: </strong>#{school.site_rep.name}<br /><strong>Rep Email: </strong>#{school.site_rep.email}".html_safe, id:"contact-info")
    elsif school.request
      return content_tag(:div, content_tag(:div, "There will be a representative for this location soon!"), id:"contact-info")
    else
      render "partials/request_form"
    end
  end



end