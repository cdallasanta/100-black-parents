import React from 'react';
import {Link} from 'react-router-dom';

const NavigationMenu = props => {
  function toggleContact() {
    const content = document.getElementById("nav-contact")
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  }

  return(
    
  )
}

export default NavigationMenu;