import React from 'react';
import AmpItem from './AmpItem';

export default function AmpList({ amps }) {
  return (
    <div className="amps-list">
      {amps.map((amp, i) => (
        <AmpItem key={amp.name + i} amp={amp} />
      ))}
    </div>
  );
}
