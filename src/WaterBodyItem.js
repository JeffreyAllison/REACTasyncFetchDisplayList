import React from 'react';

export default function WaterBodyItem({ waterBody }) {
  return (
    <div className="water">
      <p>Type: {waterBody.category}</p>
      <p>Name: {waterBody.name}</p>
      <p>region: {waterBody.location}</p>
      <p>Saline?{waterBody.saline ? 'yes' : 'no'}</p>
    </div>
  );
}
