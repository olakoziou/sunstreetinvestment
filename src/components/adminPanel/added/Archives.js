import React from 'react';
import { useSelector } from 'react-redux';
import SingleProperty from '../addNew/SingleProperty';
import { useFirestoreConnect } from 'react-redux-firebase';
import Spinner from '../spinner/Spinner';

function Archives(props) {
  useFirestoreConnect([
    { collection: 'oldCases', orderBy: ['addedDate', 'desc'] },
  ]);
  const addedProperties = useSelector(
    (state) => state.firestore.ordered.oldCases
  );
  const filtered =
    addedProperties &&
    addedProperties.filter((item) => item.status !== 'deleted');
  return (
    <div className="added-properties">
      <h5>Archiwum</h5>
      <ul className="collection">
        {addedProperties ? (
          filtered.map((property, i) => (
            <div className="property" key={i}>
              <SingleProperty
                data={property}
                allBtns={true}
                allData={true}
                archives={true}
                image={false}
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

export default Archives;
