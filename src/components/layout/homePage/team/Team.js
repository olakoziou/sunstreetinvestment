import React from 'react';
import { useSelector } from 'react-redux';
import SingleTeamMember from './SingleTeamMember';
import styled from 'styled-components';
import { mediaQueries } from '../../../../mixins';
import { useFirestoreConnect } from 'react-redux-firebase';
import { colors } from '../../../../colors';
import Spinner from '../../../adminPanel/spinner/Spinner';

const TeamDiv = styled.div`
  margin: 5rem 0;

  & h3 {
    text-align: center;
    margin: 5rem 0;

    & span {
      color: rgba(${colors.extra}, 1);
      text-shadow: 0 1px 2.5px rgba(0, 0, 0, 0.2);
    }
  }
  & > div {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  & .team-top {
    max-width: 90%;
    margin: 0 auto;
    & > div {
      @media ${mediaQueries('tab-port')} {
        height: 25rem;
      }
    }
  }

  & .team-bottom {
    max-width: 90%;
    margin: 0 auto;
    & > div {
      @media ${mediaQueries('tab-port')} {
        height: 25rem;
      }
    }
  }
`;

function Team() {
  useFirestoreConnect({ collection: 'users', orderBy: 'lastName' });
  const teamArr = useSelector((state) => state.firestore.ordered.users);
  const confirmedUsers =
    teamArr && teamArr.filter((user) => user.status === 'Confirmed');

  const team1 = [];

  teamArr &&
    confirmedUsers.forEach((user) => {
      if (
        user.fullName.indexOf('Krzysztof Kozioł') !== -1 ||
        user.fullName.indexOf('Wojciech Urbańczyk') !== -1
      ) {
        team1.push(user);
      }
    });

  const team2 = [];

  teamArr &&
    confirmedUsers.forEach((user) => {
      if (
        user.fullName.indexOf('Krzysztof Kozioł') === -1 &&
        user.fullName.indexOf('Wojciech Urbańczyk') === -1
      ) {
        team2.push(user);
      }
    });

  return (
    <section id="team">
      <TeamDiv className="team ">
        <h3>
          Nasz <span>Zespół</span>{' '}
        </h3>
        {teamArr ? (
          <>
            <div className="team-top ">
              {team1.map((member, i) => (
                <SingleTeamMember
                  key={i}
                  name={member.firstName}
                  lastName={member.lastName}
                  description={member.description}
                  img={member.userImg}
                />
              ))}
            </div>
            <div className="team-bottom">
              {team2.map((member, i) => (
                <SingleTeamMember
                  key={i}
                  name={member.firstName}
                  lastName={member.lastName}
                  description={member.description}
                  img={member.userImg}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="spinner">
            <Spinner />
          </div>
        )}
      </TeamDiv>
    </section>
  );
}

export default Team;
