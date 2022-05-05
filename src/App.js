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

  return <div className="App"></div>;
}

export default App;
