$(function(){
  $('#show-more-blogs-link').click(e => {
    e.preventDefault();
    if ($('#show-more-blogs-link')[0].innerText == "Show more") {
      $('.blog-card').css('display', 'flex');
      $('#show-more-blogs-link')[0].innerText = "Show fewer";
    } else {
      $('.blog-card:nth-child(n+5)').css('display', 'none');
      $('#show-more-blogs-link')[0].innerText = "Show more";
    }
  })
})