import React from 'react';
import CandyItem from './CandyItem';

export default function CandiesList({ candies }) {
  return (
    <div className="candies-list">
      {candies.map((candy, i) => (
        <CandyItem key={candy.name + i} candy={candy} />
      ))}
    </div>
  );
}
