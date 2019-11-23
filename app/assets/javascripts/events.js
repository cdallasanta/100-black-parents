$(function(){
  $('#show-more-events-link').click(e => {
    e.preventDefault();
    if ($('#show-more-events-link')[0].innerText == "Show more") {
      $('.event-card').css('display', 'flex');
      $('#show-more-events-link')[0].innerText = "Show fewer";
    } else {
      $('.event-card:nth-child(n+5)').css('display', 'none');
      $('#show-more-events-link')[0].innerText = "Show more";
    }
  })
})