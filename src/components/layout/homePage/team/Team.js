import React from 'react';
import { useSelector } from 'react-redux';
import SingleTeamMember from './SingleTeamMember';
import styled from 'styled-components';
import { mediaQueries } from '../../../../mixins';

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

    @media ${mediaQueries('tab-port')} {
      flex-wrap: nowrap;
    }
  }

  & .team-bottom > div {
    @media ${mediaQueries('tab-port')} {
      height: 25rem;
    }

    @media ${mediaQueries('tab-land')} {
      height: 22rem;
    }
  }
`;

function Team() {
  const team = useSelector(state => state.team.team);
  const team1 = team.slice(0, 2);
  const team2 = team.slice(2);
  return (
    <section id="team">
      <TeamDiv className="team ">
        <h3>Nasz Zespół</h3>
        <div className="team-top ">
          {team1.map((member, i) => (
            <SingleTeamMember
              key={i}
              name={member.name}
              lastName={member.lastName}
              description={member.description}
              img={member.img}
            />
          ))}
        </div>
        <div className="team-bottom">
          {team2.map((member, i) => (
            <SingleTeamMember
              key={i}
              name={member.name}
              lastName={member.lastName}
              description={member.description}
              img={member.img}
            />
          ))}
        </div>
      </TeamDiv>
    </section>
  );
}

export default Team;
