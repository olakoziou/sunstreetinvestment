import React from 'react';
import { Link } from 'react-router-dom';
import PropertySmallCard from './PropertySmallCard';

function ActualProperties() {
  return (
    <div>
      <PropertySmallCard />
      <button>
        <Link to="/nieruchomosci">Go to PropertiesPage</Link>{' '}
        <Link to="/nieruchomosci/name">Go to SinglePropertyCard</Link>
      </button>
    </div>
  );
}

export default ActualProperties;
