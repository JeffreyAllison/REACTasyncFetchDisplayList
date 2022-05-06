import './App.css';
import { useState, useEffect } from 'react';
import { getAmps } from './services/fetch-utils';
import { getWaterBodies } from './services/fetch-utils';
import { getCandies } from './services/fetch-utils';
import { getTeaKinds } from './services/fetch-utils';
import AmpList from './AmpList';
import WaterBodiesList from './WaterBodiesList';
import CandiesList from './CandiesList';
import TeaKindsList from './TeaKindsList';

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
      <AmpList amps={amps} />
      <WaterBodiesList waterBodies={waterBodies} />
      <CandiesList candies={candies} />
      <TeaKindsList teaKinds={teaKinds} />
    </div>
  );
}

export default App;
