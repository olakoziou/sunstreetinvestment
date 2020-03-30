import React from 'react';
import styled from 'styled-components';
import { boxShadows, mediaQueries } from '../../../../mixins';
import { colors } from '../../../../colors';
import Description from './Description';
import Details from './Details';

const PropertyCardSection = styled.section`
  & .property-card {
    width: 100%;
    & .property-card__banner {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      width: 100%;
      height: 40rem;
      position: relative;

      span {
        @media ${mediaQueries('phone')} {
          text-align: left;
          right: 0;
          width: max-content;
        }
        background-color: rgba(255, 255, 255, 0.5);
        border-top: 1px solid rgba(255, 255, 255, 0.75);
        border-left: 1px solid rgba(255, 255, 255, 0.75);
        border-bottom: 1px solid rgba(255, 255, 255, 0.75);
        width: 100%;
        padding: 1rem 2rem;
        font-size: 2rem;
        text-align: center;
        position: absolute;
        bottom: 15%;
        ${boxShadows('xsmall')}
      }
    }

    & .property-card__content {
      max-width: 90%;
      margin: 2rem auto;
      display: flex;
      flex-direction: column;

      @media ${mediaQueries('tab-land')} {
        flex-direction: row;
      }
    }
  }
`;

function SinglePropertyCard(props) {
  const { title, img } = props.location.state;

  return (
    <PropertyCardSection className="property">
      <div className="property-card">
        <div
          className="property-card__banner"
          style={{ backgroundImage: `url(${img})` }}
        >
          <span>{title}</span>
        </div>
        <div className="property-card__content">
          <Description data={props.location.state} />
          <Details data={props.location.state} />
        </div>
      </div>
    </PropertyCardSection>
  );
}

export default SinglePropertyCard;
