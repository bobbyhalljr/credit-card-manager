import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

const App = () => {
  useEffect(() => {
    Axios.get('https://api.teller.io/access-sandbox-2618cec0-2e33-48a4-805c-9c63a95ee482/accounts')
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err.response))
  }, [])

  return (
    <div className="App">
      <h1>hello from app.js</h1>
    </div>
  );
}

export default App;
