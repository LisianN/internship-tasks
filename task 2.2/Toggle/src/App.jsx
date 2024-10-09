import React, { useState } from 'react';
import './ToggleComponent.css';

const ToggleComponent = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className='toggle-container'>
      <button className="toggle-button" onClick={toggle}>
      
        {isToggled ?  ' Why park a domain name in parkname? ▲' : 'Why park a domain name in parkname? ▼'}
      </button> 
      {isToggled && <p className="toggle-text">Park name in the leading industry standard for domain name parking and monetization services.We offer a wide variety of services to help you
        achieve success</p>}

       
        
    </div>
   

  );
};

export default ToggleComponent;
