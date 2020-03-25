import React from 'react';
import { Link } from 'react-router-dom';

function OurHistory() {
  return (
    <div>
      OurHistory
      <button>
        <Link to="/nieruchomosci/archiwum">Go to Archive</Link>
      </button>
    </div>
  );
}

export default OurHistory;
