import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../colors';
import { mediaQueries } from '../../../../mixins';
import { Link } from 'react-router-dom';

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
      padding: 1rem;
      font-size: 1.4rem;

      & a {
        display: inline-block;
        font-weight: bold;
        color: rgba(${colors.secondary6}, 1);
      }
    }
    & > div.btn {
      max-width: max-content;
      background-color: rgba(${colors.secondary2}, 1);
      & a {
        color: rgba(${colors.secondary6});
      }

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
          Firma powstała w 2015 roku. Początkowo zajmowaliśmy się podnajmem i
          najmem krótkoterminowym, a po kilku miesiącach całkowicie
          poświęciliśmy się pozyskiwaniu nieruchomości inwestycyjnych oraz
          sprzedaży.
        </p>
        <div className="btn">
          <Link to="/archiwum">Portfolio</Link>
        </div>
      </div>
    </JobDiv>
  );
}

export default OurHistory;
