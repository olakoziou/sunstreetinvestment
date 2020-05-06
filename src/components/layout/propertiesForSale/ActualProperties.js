import React from 'react';
import PropertySmallCards from './PropertySmallCards';
import styled from 'styled-components';
import { colors } from '../../../colors';

const Div = styled.div`
  margin: 5rem 0;
  & h3 {
    text-align: center;
    margin: 4rem;

    & span {
      color: rgba(${colors.extra}, 1);
      text-shadow: 0 1px 2.5px rgba(0, 0, 0, 0.2);
    }
  }
`;

function ActualProperties() {
  return (
    <section id="actual-properties">
      <Div>
        <h3>
          Nasze <span>inwestycje</span>
        </h3>
        <PropertySmallCards button={true} limit={true} />
      </Div>
    </section>
  );
}

export default ActualProperties;
