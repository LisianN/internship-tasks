import React, { useState } from 'react';
import './ToggleComponent.css'; 

const NestedToggleComponent = () => {
  const [isOuterToggled, setIsOuterToggled] = useState(false);
  const [isInnerToggled, setIsInnerToggled] = useState(false);

  const toggleOuter = () => {
    setIsOuterToggled(!isOuterToggled);
  };

  const toggleInner = () => {
    setIsInnerToggled(!isInnerToggled);
  };

  return (
    <div className="toggle-container">
      <button className="toggle-button" onClick={toggleOuter}>
        {isOuterToggled ? '▲ About Us' : '▼ About Us'}
      </button>
      {isOuterToggled && (
        <div className="inner-toggle-container">
          
          <p className="toggle-button" onClick={toggleInner}>
            {isInnerToggled ? 'Parkname is the leading industry standard for domain name parking and monetization services. ▲' : ' Parkname is the leading industry standard for domain name parking and monetization services.▼ '}
   
          </p>
          {isInnerToggled && <p>Your domains are a valuable online property.
            As in any investments you want the mos efficient,and easy way to <br />
            make sure your property is gonna be profit.Do own more than 1000 domains?As a professiona domainer....</p>}


          <p className="toggle-button" >
            {isInnerToggled ? 'Parkname is the leading industry standard for domain name parking and monetization services. ▲' : ' Is Parkname actually free? ▼ '}
   
          </p>
          <p className="toggle-button">
            {isInnerToggled ? 'Parkname is the leading industry standard for domain name parking and monetization services. ▲' : ' What you do? ▼ '}
            
   
          </p>
          
        </div>
      )}
    </div>
  );
};

export default NestedToggleComponent;
