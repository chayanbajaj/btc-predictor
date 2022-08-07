import React from 'react'
import {
    useCryptoPrices,
    useCryptoTickers,
    CryptoPriceProvider,
} from "react-realtime-crypto-prices";

export default function LivePrice() {
    const prices = useCryptoPrices(["btc", "eth"]);
    const tickers = useCryptoTickers(["btc", "eth"]);
  return (
    <>
    <div>Live Prices</div>
    <div>{JSON.stringify(prices)}</div>

    <div>Live Tickers</div>
    <div>{JSON.stringify(tickers)}</div>
    </>
  )
}
