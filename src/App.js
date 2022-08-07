import './App.css';
import {CryptoPriceProvider} from "react-realtime-crypto-prices";
import LivePrice from './components/LivePrice';

function App() {
  return (
    <div className="App">
            <CryptoPriceProvider>
                <LivePrice />
            </CryptoPriceProvider>
    </div>
  );
}

export default App;
