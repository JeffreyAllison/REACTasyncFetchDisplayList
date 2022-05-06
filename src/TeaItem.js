import React from 'react';

export default function TeaItem({ teaKind }) {
  return (
    <div className="tea">
      <p>Name: {teaKind.name}</p>
      <p>Type: {teaKind.category}</p>
      <p>Flavor Profile: {teaKind.flavor}</p>
      <p>Contains caffeine? {teaKind.caffeinated ? 'yes' : 'no'}</p>
    </div>
  );
}
