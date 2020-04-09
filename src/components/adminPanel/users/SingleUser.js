import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../colors';
import { useDispatch, useSelector } from 'react-redux';
import { confirmUser, deleteUser } from '../../../store/actions/userActions';
import { useFirestoreConnect } from 'react-redux-firebase';

const SingleUserDiv = styled.div`
  display: flex;
  align-items: center;
  & .single-user__initials {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: rgba(${colors.primary});
    margin: 1rem;
    display: flex;
    justify-content: content;
    align-items: center;
    text-align: center;

    & span {
      display: block;
      width: 100%;
      color: rgba(${colors.secondary5});
      font-size: 2rem;
    }
  }
  & .single-user__img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin: 1rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  & .single-user__details {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 70%;
  }

  & .single-user-btns {
    display: flex;
    flex-direction: column;
  }
`;

function SingleUser(props) {
  const { data } = props;
  const dispatch = useDispatch();
  useFirestoreConnect('users');
  const users = useSelector((state) => state.firestore.ordered.users);

  const handleConfimation = (e) => {
    const userEmail = Array.from(
      Array.from(e.target.parentElement.parentElement.children)[1].children
    )[2].innerHTML;
    const user = users.filter((user) => user.email === userEmail)[0];

    dispatch(confirmUser(user));
  };

  const handleDelete = (e) => {
    const userEmail = Array.from(
      Array.from(e.target.parentElement.parentElement.children)[1].children
    )[2].innerHTML;
    const user = users.filter((user) => user.email === userEmail)[0];

    dispatch(deleteUser(user));
  };
  return (
    <li className="collection-item avatar">
      <SingleUserDiv>
        {data.userImg ? (
          <div
            className="single-user__img"
            style={{ backgroundImage: `url(${data.userImg})` }}
          ></div>
        ) : (
          <div className="single-user__initials">
            <span>{`${data.firstName[0]}${data.lastName[0]}`}</span>
          </div>
        )}

        <div className="single-user__details">
          <span>
            {data && data.firstName} {data && data.lastName}
          </span>
          <span>{data && data.description}</span>
          <span>{data && data.email}</span>
          <span>Status: {data && data.status}</span>
        </div>
        <div className="single-user-btns">
          <div className="btn blue" onClick={handleConfimation}>
            Zatwierdź
          </div>
          <div className="btn red" onClick={handleDelete}>
            Usuń
          </div>
        </div>
      </SingleUserDiv>
    </li>
  );
}

export default SingleUser;
