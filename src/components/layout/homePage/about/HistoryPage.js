import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import HistoryCard from './HistoryCard';
import { mediaQueries } from '../../../../mixins';

const HistorySection = styled.section`
  margin: 5rem 0;

  & h2 {
    text-align: center;
    padding: 3rem 0;
  }

  & .history {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    text-align: center;

    @media ${mediaQueries('phone')} {
      width: 85%;
    }
  }
`;

function HistoryPage() {
  const oldCases = useSelector((state) => state.oldCases.oldCases);
  return (
    <HistorySection className="history-page">
      <h2>Archiwum</h2>
      <div className="history">
        {oldCases.map((oldCase, i) => (
          <HistoryCard
            key={i}
            id={oldCase.propertyId}
            name={oldCase.propertyName}
            description={oldCase.propertyDescription}
            buyPrice={oldCase.buyPrice}
            sellPrice={oldCase.sellPrice}
            metrage={oldCase.metrage}
            otherCosts={oldCase.otherCosts}
            notary={oldCase.notary}
            renovation={oldCase.renovation}
            commissions={oldCase.commissions}
            mthCosts={oldCase.mthCosts}
            info={oldCase.info}
          />
        ))}
      </div>
    </HistorySection>
  );
}

export default HistoryPage;
