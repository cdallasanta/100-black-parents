let gradeLevel = "";

schoolsForSelect = () => {
  const schools = this.state.schools.filter(s => s.grade_level === this.state.grade_level)

  return schools.map((school, i) => {
    return <option value={school.id} key={i}>{school.name}</option>
  })
}

$(function(){
  $('#grade_selector').change(function() {
    var filter = $(this).val();
    $('option').each(function() {
      if ($(this).val() == filter) {
        $(this).show();
      } else {
        $(this).hide();
      }
      $('#school_selector').val(filter);
    })
  })
})