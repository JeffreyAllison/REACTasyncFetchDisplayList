import React from 'react';
import TeaItem from './TeaItem';

export default function TeaKindsList({ teaKinds }) {
  return (
    <div className="teas-list">
      {teaKinds.map((teaKind, i) => (
        <TeaItem key={teaKind.name + i} teaKind={teaKind} />
      ))}
    </div>
  );
}
