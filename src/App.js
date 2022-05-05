import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { getAmps } from './services/fetch-utils';
import { getWaterBodies } from './services/fetch-utils';
import { getCandies } from './services/fetch-utils';
import { getTeaKinds } from './services/fetch-utils';

function App() {
  const [amps, setAmps] = useState([]);
  const [waterBodies, setWaterBodies] = useState([]);
  const [candies, setCandies] = useState([]);
  const [teaKinds, setTeaKinds] = useState([]);

  useEffect(async () => {
    const ampsResponse = await getAmps();
    setAmps(ampsResponse);

    const waterBodiesResponse = await getWaterBodies();
    setWaterBodies(waterBodiesResponse);

    const candiesResponse = await getCandies();
    setCandies(candiesResponse);

    const teaKindsResponse = await getTeaKinds();
    setTeaKinds(teaKindsResponse);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
