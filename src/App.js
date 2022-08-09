import React from 'react'
import {CryptoPriceProvider} from "react-realtime-crypto-prices";
import LivePrice from './components/LivePrice';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <CryptoPriceProvider>
          <LivePrice />
        </CryptoPriceProvider>
    </div>
  );
}

export default App;
