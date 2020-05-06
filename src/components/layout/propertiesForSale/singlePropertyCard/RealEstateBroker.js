import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function RealEstateBroker(props) {
  console.log(props.data);
  useFirestoreConnect('users');
  const users = useSelector((state) => state.firestore.ordered.users);
  const realEstateBroker =
    users &&
    users.filter((user) => user.fullName === props.data.realEstateBroker)[0];
  console.log(users);
  return (
    <div className="author">
      <h5>Opiekun oferty</h5>
      <div className="author-details">
        {realEstateBroker && realEstateBroker.userImg ? (
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                realEstateBroker && realEstateBroker.userImg
              })`,
            }}
          ></div>
        ) : (
          <div className="initials">
            <span>
              {realEstateBroker && realEstateBroker.firstName[0]}
              {realEstateBroker && realEstateBroker.lastName[0]}
            </span>
          </div>
        )}

        <div className="info">
          <span className="name">
            {realEstateBroker && realEstateBroker.fullName}
          </span>
          <div className="contact">
            {realEstateBroker && realEstateBroker.phone && (
              <div>
                <i className="material-icons small">local_phone</i>
                <span>{realEstateBroker && realEstateBroker.phone}</span>
              </div>
            )}
            <div>
              <i className="material-icons small">mail_outline</i>
              <span>{realEstateBroker && realEstateBroker.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealEstateBroker;
