import React from 'react';

export default function CandyItem({ candy }) {
  return (
    <div className="candy">
      <p>Name: {candy.name}</p>
      <p>calories: {candy.calories}</p>
      <p>Contains tree nuts? {candy.contains_nuts ? 'yes' : 'no'}</p>
      <p>Sour?{candy.sour ? 'yes' : 'no'}</p>
    </div>
  );
}
