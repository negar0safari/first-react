import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [catFact, setCatFact] = useState('');

  const fetchCatFact = () => {
    axios.get('https://catfact.ninja/fact').then((res) => {
      console.log(res.data.fact.length);//fact همون جملست
      setCatFact(res.data.fact);
    });
  };

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Fetch Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
