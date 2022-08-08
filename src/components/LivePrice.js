import React from 'react'
import { useCryptoPrices } from "react-realtime-crypto-prices";
import { useState, useEffect  } from 'react';

export default function LivePrice() {
  const price = useCryptoPrices(["btc"]);
  const [score, setScore] = useState(localStorage.getItem('Score'));
  const [priceAtClick, setPriceAtClick] = useState();
  const [buttonDisabling, setButtonDisabling] = useState(true);
  const [upClicked, setUpClicked] = useState(false);
  const onResetHandler = () => {
    setScore(0);
  }

  useEffect(() => {
    localStorage.setItem('Score', score);
  },[score])

  const onUpHandler = () => {
    setUpClicked(true);
    setPriceAtClick(price.btc);
    setButtonDisabling(true);
  }
  useEffect(() => {
    if(price.btc > priceAtClick && upClicked) {
      setScore(oldScore => oldScore+1);
      setUpClicked(false);
    }
    else if(price.btc < priceAtClick && upClicked) {
      setScore(oldScore => oldScore-1);
      setUpClicked(false);
    }
    else if(price.btc < priceAtClick) {
      setScore(oldScore => oldScore+1);
    }
    else if(price.btc > priceAtClick) {
      setScore(oldScore => oldScore-1);
    }
  }, [buttonDisabling])

  const onDownHandler = () => {
    setPriceAtClick(price.btc);
    setButtonDisabling(true);
  }

  useEffect(() => {
    setScore(localStorage.getItem('Score'))
    console.log(localStorage.getItem('Score'))
  }, [])
  useEffect(() => {
    price.btc && setButtonDisabling(false) 
  }, [price.btc])
  
  return (
    <>
      <div className='player-score'>
        PLAYER'S SCORE:     
        <div className='actual-score'>
          { score }
        </div>
      </div>
      <div className='live-price'>
        <div className='live-price-title'>Current Bitcoin Price</div>
        <div className='live-price-content'> {price.btc} USD </div>
      </div>
      <div className='predict-price'>
        Predict whether the price of Bitcoin will go Up, or Down. <br/>
        <button className='up-predict-button' onClick={onUpHandler} disabled={buttonDisabling}> Up </button>
        <button className='down-predict-button' onClick={onDownHandler} disabled={buttonDisabling}> Down </button>
      </div>
      <button className='reset-score-button' onClick={onResetHandler}> RESET SCORE </button>
    </>
  );
}
