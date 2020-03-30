import React from 'react';
import Slider from './slider/Slider';
import About from './about/About';
import Team from './team/Team';
import ActualProperties from '../propertiesForSale/ActualProperties';

function HomePage() {
  return (
    <>
      <Slider />
      <ActualProperties />
      <About />
      <Team />
    </>
  );
}

export default HomePage;
