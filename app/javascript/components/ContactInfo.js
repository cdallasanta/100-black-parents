import React from 'react';
import $ from 'jquery';

const ContactInfo = ({contact, siteRepClick, request, s_id}) => {
  function renderContact() {
    if (contact){
      return contactDiv();
    } else if (request) {
      return (
        <div>
          There will be a representative for this location soon!
        </div>
      );
    } else {
      return (
        <div>
          There is no site representative for this site. Claim it <button type="button" onClick={e => siteRepClick(e, s_id)}>here!</button>
        </div>
      );
    }
  }

  function contactDiv() {
    return (
      <div id="contact-div">
        <img src={contact.avatar_url} alt="rep-avatar" />
        <div id="contact-info">
          <strong>Rep Name:</strong> {contact.name}<br />
          <strong>Rep Email:</strong> {contact.email}
        </div>
      </div>
    )
  }

  return(
    renderContact()
  )
}

export default ContactInfo;