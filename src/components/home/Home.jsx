import React from 'react';
import Top from '../top/Top';
import Pear from '../pear/Pear';
import Grass from '../grass/Grass';
import Flower from '../flower/Flower';
import Airplane from '../airplane/Airplane';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Top />
      <Pear />
      <Grass />
      <Flower />
      <Airplane />
    </div>
  );
}
