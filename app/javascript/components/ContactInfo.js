import React from 'react';
import $ from 'jquery';

const ContactInfo = ({contact, siteRepClick, request}) => {
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
          There is no site representative for this site. Claim it <button type="button" onClick={e => siteRepClick(e)}>here!</button>
        </div>
      );
    }
  }

  function contactDiv() {
    return (

    )
  }

  return(
    renderContact()
  )
}

export default ContactInfo;