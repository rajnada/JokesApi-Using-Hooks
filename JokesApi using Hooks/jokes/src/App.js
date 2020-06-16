import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('loading');
  const [fName, setFN] = useState('Nirmal');
  const [sName, setSN] = useState('Patel');

  const newJoke = (first, second) => {
    fetch(
      ` http://api.icndb.com/jokes/random?firstName=${fName}&lastName=${sName}`
    )
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);
        setJoke(res2.value.joke);
      });
  };

  useEffect(() => {
    newJoke(fName, sName);
  }, []);

  return (
    <div className='App'>
      <h1>Today's Most Demanded Jokes</h1>
      <h3>{joke}</h3>
      {/* <input
        type='text'
        value={fName}
        onChange={(e) => setFN(e.target.value)}
      />
      <input
        type='text'
        value={sName}
        onChange={(e) => setSN(e.target.value)}
      /> */}
      <button onClick={() => newJoke(fName, sName)}>Display Joke</button>
    </div>
  );
}

export default App;
