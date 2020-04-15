import React from 'react';
import { useSelector } from 'react-redux';
import SingleTeamMember from './SingleTeamMember';
import styled from 'styled-components';
import { mediaQueries } from '../../../../mixins';
import { useFirestoreConnect } from 'react-redux-firebase';

const TeamDiv = styled.div`
  margin: 5rem 0;

  & h3 {
    text-align: center;
    margin: 5rem 0;
  }
  & > div {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  & .team-bottom {
    max-width: 95%;
    margin: 0 auto;
    & > div {
      @media ${mediaQueries('tab-port')} {
        height: 25rem;
        /* min-width: 30rem; */
      }

      @media ${mediaQueries('tab-land')} {
        height: 22rem;
      }
    }
  }
`;

function Team() {
  useFirestoreConnect('users');
  const team = useSelector((state) => state.team.team);
  const teamArr = useSelector((state) => state.firestore.ordered.users);
  const confirmedUsers =
    teamArr && teamArr.filter((user) => user.status === 'Confirmed');

  const team1 = [];

  teamArr &&
    confirmedUsers.forEach((user) => {
      if (
        (user.fullName.indexOf('Krzysztof') !== -1 &&
          user.fullName.indexOf('Kozioł') !== -1) ||
        (user.fullName.indexOf('Wojciech') !== -1 &&
          user.fullName.indexOf('Urbańczyk') !== -1)
      ) {
        team1.push(user);
      }
    });

  const team2 = [];

  teamArr &&
    confirmedUsers.forEach((user) => {
      if (
        user.fullName.indexOf('Krzysztof') === -1 &&
        user.fullName.indexOf('Kozioł') === -1 &&
        user.fullName.indexOf('Wojciech') === -1 &&
        user.fullName.indexOf('Urbańczyk') === -1
      ) {
        team2.push(user);
      }
    });

  // const team1 = team.slice(0, 2);
  // const team2 = team.slice(2);
  return (
    <section id="team">
      <TeamDiv className="team ">
        <h3>Nasz Zespół</h3>
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
      </TeamDiv>
    </section>
  );
}

export default Team;
