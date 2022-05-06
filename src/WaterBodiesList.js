import React from 'react';
import WaterBodyItem from './WaterBodyItem';

export default function WaterBodiesList({ waterBodies }) {
  return (
    <div className="waters-list">
      {waterBodies.map((waterBody, i) => (
        <WaterBodyItem key={waterBody.category + i} waterBody={waterBody} />
      ))}
    </div>
  );
}
