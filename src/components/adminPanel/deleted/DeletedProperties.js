import React from 'react';
import { useSelector } from 'react-redux';
import SingleProperty from '../addNew/SingleProperty';
import { useFirestoreConnect } from 'react-redux-firebase';
import Spinner from '../spinner/Spinner';

function DeletedProperties(props) {
  // console.log(props);
  useFirestoreConnect([
    {
      collection: 'properties',
      orderBy: ['addedDate', 'desc'],
    },
  ]);
  useFirestoreConnect([
    {
      collection: 'oldCases',
      orderBy: ['addedDate', 'desc'],
    },
  ]);
  const addedProperties = useSelector(
    (state) => state.firestore.ordered.properties
  );
  const addedPropertiesOldCases = useSelector(
    (state) => state.firestore.ordered.oldCases
  );
  const filtered =
    addedProperties &&
    addedProperties.filter((item) => item.status === 'deleted');

  const filteredOldCases =
    addedPropertiesOldCases &&
    addedPropertiesOldCases.filter((item) => item.status === 'deleted');
  return (
    <div className="deleted-properties">
      <div className="deleted-properties__new">
        <h5>Usunięte nieruchomości</h5>
        <ul className="collection">
          {addedProperties ? (
            filtered.map((property, i) => (
              <div className="property" key={i}>
                <SingleProperty
                  data={property}
                  allBtns={false}
                  allData={false}
                  archives={false}
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
      <div className="deleted-properties__old">
        <h5>Archiwum</h5>
        <ul className="collection">
          {addedPropertiesOldCases ? (
            filteredOldCases.map((property, i) => (
              <div className="property" key={i}>
                <SingleProperty
                  data={property}
                  allBtns={false}
                  allData={false}
                  archives={true}
                  pathname={props.location.pathname}
                />
              </div>
            ))
          ) : (
            <Spinner />
          )}
        </ul>
      </div>
    </div>
  );
}

export default DeletedProperties;
