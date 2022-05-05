import React from 'react';

export default function AmpItem({ amp }) {
  return (
    <div className="amp">
      <p>Name: {amp.name}</p>
      <p>by:{amp.manufacturer}</p>
      <p>Released:{amp.year}</p>
      <p>Tone description:{amp.tone_description}</p>
      <p>Reissued?{amp.production_reissue ? 'yes' : 'no'}</p>
      <p>Wattage: {amp.watts}</p>
    </div>
  );
}
