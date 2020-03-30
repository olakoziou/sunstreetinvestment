import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import HistoryCard from './HistoryCard';

const HistorySection = styled.section`
  margin: 5rem 0;

  & h2 {
    text-align: center;
    padding: 5rem;
  }

  & .history {
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
`;

function HistoryPage() {
  const oldCases = useSelector(state => state.oldCases.oldCases);
  return (
    <HistorySection className="history-page">
      <h2>Archiwum</h2>
      <div className="history">
        {oldCases.map(oldCase => (
          <HistoryCard
            id={oldCase.propertyId}
            name={oldCase.propertyName}
            description={oldCase.propertyDescription}
            buyPrice={oldCase.buyPrice}
            sellPrice={oldCase.sellPrice}
            metrage={oldCase.metrage}
            costs={oldCase.otherCosts}
          />
        ))}
      </div>
    </HistorySection>
  );
}

export default HistoryPage;
