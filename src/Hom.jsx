import React from 'react';
import { useFont } from './FontContext';
const Hom = () => {
  const { font } = useFont();
  return (
    <div>
      <h1 style={{ fontFamily: font }}>Home Component</h1>
    </div>
  );
};
export default Hom;