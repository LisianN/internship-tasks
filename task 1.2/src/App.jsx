// App.jsx
import React from 'react';
import Card from './Card'


const App = () => {
  const cardData = [
    {
      version: '13.4.0',
      date: '05/20/20',
      name: 'Kevin Joe',
      description: ['System change', 'Cloud Drive', 'Auto Start'],
      
    },
    {
      version: '13.3.0',
      date: '04/15/20',
      name: 'Kevin Jon',
      description: ['Network thrive', 'Functionality', 'Update Notification'],
       
    },
    {
      version: '13.3.0',
      date: '04/15/20',
      name: 'Kevin Jon',
      description: ['Network thrive', 'Functionality', 'Update Notification'],
      
    },
    {
      version: '13.3.0',
      date: '04/15/20',
      name: 'Kevin Jon',
      description: ['Network thrive', 'Functionality', 'Update Notification'],
      
    },
    {
      version: '13.3.0',
      date: '04/15/20',
      name: 'Kevin Jon',
      description: ['Network thrive', 'Functionality', 'Update Notification'],
      
    },
    {
      version: '13.3.0',
      date: '04/15/20',
      name: 'Kevin Jon',
      description: ['Network thrive', 'Functionality', 'Update Notification'],
      
    },
    {
      version: '13.3.0',
      date: '04/15/20',
      name: 'Kevin Jon',
      description: ['Network thrive', 'Functionality', 'Update Notification'],
      
    },
    {
      version: '13.3.0',
      date: '04/15/20',
      name: 'Kevin Jon',
      description: ['Network thrive', 'Functionality', 'Update Notification'],
      
    },
    {
      version: '13.3.0',
      date: '04/15/20',
      name: 'Kevin Jon',
      description: ['Network thrive', 'Functionality', 'Update Notification'],
      
    },
    
  ];

  return (
    <div className="app">
      {cardData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
    
  );
};

export default App;
