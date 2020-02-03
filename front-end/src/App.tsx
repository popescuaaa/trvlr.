import React from 'react';
import Card from './components/card/Card';
import Landing from './components/landing/Landing';
import './styles/App.css';

/**
 *  Test array for showing and testing the display properties
 * 
 */
const cards = [
  {
      destination: 'Madrid',
      cost: 300
  },
  {
      destination: 'Lisabona',
      cost: 200
  },
  {
      destination: 'London',
      cost: 400
  },
  {
      destination: 'Roma',
      cost: 125
  }
];

const App = () => {
  return (
    <div className="app">
      <div className="landing-page">
        <Landing/>
      </div>
      <div className="content">
        {cards.map(item => {
            return <Card destination={item.destination} cost={item.cost}></Card>
        })}
      </div>
    </div>
  );
}
export default App;
