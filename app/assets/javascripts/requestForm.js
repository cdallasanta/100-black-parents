closeOnClick = e => {
  if (e.target.id === "requestGreyBackground") {
    $('#requestGreyBackground').css('visibility', 'hidden');
  }
}

openRequestForm = () => {
  $('#requestGreyBackground').css('visibility', 'visible');
}

createRequest = e => {
  preventDefault();
  debugger;
  // const dist_id = this.props.match.params.dist_id
  // const school_id = this.props.match.params.school_id
  // $.ajax({
  //   type: 'POST',
  //   url: `/api/districts/${dist_id}/schools/${school_id}/events`,
  //   data: {
  //     event: eventData
  //   },
  //   context: this,
  //   success: resp => {
  //     if (resp.approved) {
  //       this.setState({
  //         school_data: {
  //           ...this.state.school_data,
  //           events: [...this.state.school_data.events, resp]
  //         }
  //       });
  //     }
  //     this.setState({showEventForm: false});
  //   }
  // })
}

$(function(){
  $('#request-form-button').click(openRequestForm);
  $('#requestGreyBackground').click(closeOnClick);
  $('#requestForm').submit(createRequest);
});