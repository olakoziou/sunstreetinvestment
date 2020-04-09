import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

import styled from 'styled-components';
import { colors } from '../../../colors';
import { useHistory } from 'react-router';

const UserDiv = styled.div`
  & .user-img {
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  & .user-initials {
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    background-color: rgba(${colors.primary});
    border-radius: 50%;
    color: rgba(${colors.secondary5});
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .user-details {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;

    & span {
      text-align: center;
      font-size: 1.1rem;
      margin: 0.5rem;
    }
  }

  & .edit {
    display: flex;
    justify-content: center;
  }
`;

function UserAccount(props) {
  useFirestoreConnect('users');
  const users = useSelector((state) => state.firestore.ordered.users);
  const uid = useSelector((state) => state.firebase.auth.uid);
  const user = users && users.filter((user) => user.id === uid)[0];
  const history = useHistory();

  const handleEdit = (e) => {
    history.push({
      pathname: '/admin-panel/edit-user',
      state: user,
    });
  };
  return (
    <UserDiv className="user">
      {user && user.userImg !== null ? (
        <div
          className="user-img"
          style={{ backgroundImage: `url(${user.userImg})` }}
        ></div>
      ) : (
        <div className="user-initials">
          <span>
            {user && user.firstName[0]}
            {user && user.lastName[0]}
          </span>
        </div>
      )}
      <div className="user-details">
        <span>
          {user && user.firstName} {user && user.lastName}
        </span>
        <span>{user && user.email}</span>
        <span>{user && user.description}</span>
      </div>
      {user && (
        <div className="edit">
          <div className="btn blue" onClick={handleEdit}>
            Edytuj
          </div>
        </div>
      )}
    </UserDiv>
  );
}

export default UserAccount;
