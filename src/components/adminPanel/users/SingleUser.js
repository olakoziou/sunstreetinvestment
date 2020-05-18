import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../colors';
import { useDispatch, useSelector } from 'react-redux';
import { confirmUser, deleteUser } from '../../../store/actions/userActions';
import { useFirestoreConnect } from 'react-redux-firebase';
import { mediaQueries } from '../../../mixins';

const SingleUserDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${mediaQueries('tab-port')} {
    flex-direction: row;
  }
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
    flex-grow: 0.5;
    width: 70%;
  }

  & .single-user-btns {
    display: flex;
    flex-direction: row;

    & button {
      margin: 1rem;

      @media ${mediaQueries('tab-port')} {
        margin: 0 0.5rem;
      }
    }

    @media ${mediaQueries('tab-port')} {
      flex-direction: row;
    }
  }
`;

function SingleUser(props) {
  const { data } = props;
  const dispatch = useDispatch();
  useFirestoreConnect('users');
  const users = useSelector((state) => state.firestore.ordered.users);

  const handleConfimation = (e) => {
    const fullName = Array.from(
      Array.from(e.target.parentElement.parentElement.children)[1].children
    )[0].innerHTML;
    const user = users.filter((user) => user.fullName === fullName)[0];

    dispatch(confirmUser(user));
  };

  const handleDelete = (e) => {
    const fullName = Array.from(
      Array.from(e.target.parentElement.parentElement.children)[1].children
    )[0].innerHTML;
    const user = users.filter((user) => user.fullName === fullName)[0];

    dispatch(deleteUser(user));
  };
  return (
    <li className="collection-item avatar" style={{ paddingLeft: 0 }}>
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
          <button
            className="btn blue"
            onClick={handleConfimation}
            disabled={data.status === 'Confirmed' ? true : false}
          >
            Zatwierdź
          </button>
          <button
            className="btn red"
            onClick={handleDelete}
            disabled={data.status === 'Deleted' ? true : false}
          >
            Usuń
          </button>
        </div>
      </SingleUserDiv>
    </li>
  );
}

export default SingleUser;
