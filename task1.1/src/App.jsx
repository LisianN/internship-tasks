import React from 'react';
import './App.css'; // Make sure to create this CSS file

const items = [
  { id: 1, icon: '🌐', title: 'Domain Length', description: 'Is the domain short enough?' },
  { id: 2, icon: '🔤', title: 'Language', description: 'How complex is the actual domain?' },
  { id: 3, icon: '🌍', title: 'International Recognition', description: 'Does the domain extension match the content?' },
  { id: 4, icon: '🔍', title: 'Search Engine', description: 'How well does it rank in search engines?' },
  { id: 5, icon: '📈', title: 'Advertising Potential', description: 'Could it be used for advertising campaigns?' },
  { id: 6, icon: '💼', title: 'Business Potential', description: 'What is the business potential?' },
  { id: 7, icon: '💸', title: 'Sales Opportunities', description: 'What are the sales opportunities?' },
  { id: 8, icon: '✏️', title: 'Typo Susceptibility', description: 'Is it prone to typos?' },
  { id: 9, icon: '📊', title: 'Market Value', description: 'What is the market value?' }
];

function App() {
  return (
    <div className="container">
      {items.map((item) => (
        <div key={item.id} className="box">
          <h3>{item.icon} {item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
