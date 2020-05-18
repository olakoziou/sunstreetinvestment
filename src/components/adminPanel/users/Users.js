import React from 'react';
import { useSelector } from 'react-redux';
import SingleUser from './SingleUser';
import { useFirestoreConnect } from 'react-redux-firebase';
import Spinner from '../spinner/Spinner';
import { Link } from 'react-router-dom';

function Users() {
  useFirestoreConnect({ collection: 'users', orderBy: 'lastName' });
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
      <Link to="/admin-panel/add-new-user">
        <div className="btn">Dodaj nowego</div>
      </Link>
    </div>
  );
}

export default Users;
