import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../colors';
import { mediaQueries } from '../../../../mixins';

const JobDiv = styled.div`
  background-color: rgba(${colors.extra}, 1);
  border: 2px solid rgba(${colors.secondary5}, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  @media ${mediaQueries('tab-port')} {
    bottom: -6rem;
    right: 5%;
  }

  h4 {
    margin: 1rem;
  }

  & > div {
    height: 100%;
    margin-bottom: 1rem;
    & > p {
      padding: 1rem 2rem;
      font-size: 1.2rem;
    }
    & > div {
      max-width: max-content;
      background-color: rgba(${colors.secondary2}, 1);

      &:hover {
        background-color: rgba(${colors.secondary3}, 1);
      }
    }
  }
`;

function OurHistory() {
  return (
    <JobDiv className="our-history">
      <h4>Nasza historia</h4>
      <div className="our-history__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          voluptatibus repellendus possimus recusandae cupiditate molestiae eius
          tempore assumenda numquam? Aut!
        </p>
        <div className="btn">Portfolio</div>
      </div>
    </JobDiv>
  );
}

export default OurHistory;
