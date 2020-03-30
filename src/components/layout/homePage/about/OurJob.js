import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../colors';
import { mediaQueries } from '../../../../mixins';

const JobDiv = styled.div`
  background: rgba(${colors.primary3}, 1);

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${mediaQueries('tab-port')} {
    top: -6rem;
    left: 5%;
  }

  & h4 {
    color: rgba(${colors.secondary4}, 1);
  }

  & .our-job__work {
    color: rgba(${colors.secondary4}, 1);

    & > div {
      font-size: 1.2rem;
      background: rgb(189, 189, 189);
      background: radial-gradient(
        circle,
        rgba(189, 189, 189, 0.05) 0%,
        rgba(208, 208, 208, 0.025) 50%,
        rgba(240, 240, 240, 0) 100%
      );
      margin: 1rem;
      width: 100%;
    }
  }
`;

function OurJob() {
  return (
    <JobDiv className="our-job">
      <h4>Czym się zajmujemy</h4>
      <div className="our-job__work">
        <div className="wotk-item-1">
          <i className="material-icons">check</i>
          <span>Pozyskiwanie nieruchomości na sprzedaż</span>
        </div>
        <div className="wotk-item-2">
          <i className="material-icons">check</i>Negocjowanie cen w imieniu
          Klienta
        </div>
        <div className="wotk-item-3">
          <i className="material-icons">check</i>Budowa osiedli domów
        </div>
        <div className="wotk-item-4">
          <i className="material-icons">check</i>Zarządzanie kapitałem Klienta
        </div>
      </div>
    </JobDiv>
  );
}

export default OurJob;
