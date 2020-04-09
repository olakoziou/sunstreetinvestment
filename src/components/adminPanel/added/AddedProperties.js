import React from 'react';
import { useSelector } from 'react-redux';
import SingleProperty from '../addNew/SingleProperty';
import { useFirestoreConnect } from 'react-redux-firebase';
import Spinner from '../spinner/Spinner';

function AddedProperties(props) {
  useFirestoreConnect([
    {
      collection: 'properties',
      orderBy: ['addedDate', 'desc'],
    },
  ]);
  const addedProperties = useSelector(
    (state) => state.firestore.ordered.properties
  );
  const filtered =
    addedProperties &&
    addedProperties.filter((item) => item.status !== 'deleted');
  return (
    <div className="added-properties">
      <h5>Dodane nieruchomości</h5>
      <ul className="collection">
        {addedProperties ? (
          filtered.map((property, i) => (
            <div className="property" key={i}>
              <SingleProperty
                data={property}
                allBtns={true}
                allData={true}
                archives={false}
                pathname={props.location.pathname}
              />
            </div>
          ))
        ) : (
          <Spinner />
        )}
      </ul>
    </div>
  );
}

export default AddedProperties;
