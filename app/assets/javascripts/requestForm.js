closeOnClick = e => {
  if (e.target.id === "requestGreyBackground") {
    $('#requestGreyBackground').css('visibility', 'hidden');
  }
}

openRequestForm = () => {
  $('#requestGreyBackground').css('visibility', 'visible');
}

createRequest = e => {
  e.preventDefault();
  $("#submit-request").val("Submitting Request...");
  $("#submit-request").attr("disabled", true);
  const school_id = $('#school-id').val();
  const user_id = $('#user-id').val();
  const notes = $('#notes').val();
  $.ajax({
    type: 'POST',
    url: `/requests`,
    data: {
      request: {
        user_id: user_id,
        school_id: school_id,
        notes: notes
      }
    },
    success: resp => {
      $('#requestGreyBackground').css('visibility', 'hidden');
      $('#contact-info').replaceWith( "<div id='contact-info'>Your form has been submitted for approval.</div>" );
    }
  })
}

$(function(){
  $('#request-form-button').click(openRequestForm);
  $('#requestGreyBackground').click(closeOnClick);
  $('#requestForm').submit(e => createRequest(e));
});