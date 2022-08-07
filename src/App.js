import './App.css';
import {CryptoPriceProvider} from "react-realtime-crypto-prices";
import LivePrice from './components/LivePrice';
import Header from './components/Header';

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
