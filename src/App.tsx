import React from 'react';
import ExchangeRates from './ExchangeRates';
import Dogs from './Dogs';
import './App.css';

function App() {
  return (
    <div className="App">
        <ExchangeRates />
      <Dogs onDogSelected={() => { }}/>
    </div>
  );
}

export default App;
