$(function(){
  $('#grade-selector').change(function() {
    var filter = $(this).val();
    $('#school-selector option').each(function() {
      if ($(this).data('grade-level') == filter || filter == "") {
        $(this).show();
      } else {
        $(this).hide();
      }
      $('#school-selector').val(filter);
    })
  })

  $('#selector-form').submit(function(e) {
    e.preventDefault();
    if ($('#school-selector').val() != "" && $('#school-selector').val() != null) {
      // TODO, district_id needs changing once more districts are added
      location.href = `/districts/1/schools/${$('#school-selector').val()}`;
    }
  })
})