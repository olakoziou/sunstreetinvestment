import React from 'react';
import { useSelector } from 'react-redux';
import SingleUser from './SingleUser';
import { useFirestoreConnect } from 'react-redux-firebase';
import Spinner from '../spinner/Spinner';

function Users() {
  useFirestoreConnect('users');
  const users = useSelector((state) => state.firestore.ordered.users);
  return (
    <div className="users">
      <ul className="collection">
        {users ? (
          users.map((user, i) => <SingleUser data={user} key={i} />)
        ) : (
          <Spinner />
        )}
      </ul>
    </div>
  );
}

export default Users;
