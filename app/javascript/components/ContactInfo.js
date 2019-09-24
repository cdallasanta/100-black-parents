import React from 'react';
import $ from 'jquery';

const ContactInfo = ({contact, siteRepClick}) => {
  function renderContact() {
    if (contact){
      return contactDiv();
    } else {
      return noContactDiv();
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

  function noContactDiv() {
    return (
      <div>
        There is no site representative for this site. Claim it <button type="button" onClick={e => siteRepClick(e)}>here!</button>
      </div>
    )
  }

  return(
    renderContact()
  )
}

export default ContactInfo;