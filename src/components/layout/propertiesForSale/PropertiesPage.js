import React from 'react';
import PropertySmallCards from './PropertySmallCards';
import styled from 'styled-components';
import { colors } from '../../../colors';
import { mediaQueries } from '../../../mixins';
import { useSelector } from 'react-redux';

const PropertiesSection = styled.section`
  margin-bottom: 5rem;

  & .banner {
    position: relative;

    & .banner-title {
      position: absolute;
      top: 25%;
      left: 0;
      right: 0;
      text-align: center;
      z-index: 100;
      color: rgba(${colors.secondary5}, 1);
      text-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 5rem;
      left: 0;
      background-color: rgba(1, 1, 1, 0.5);
      z-index: 10;
    }
    & .banner-images {
      display: flex;
      position: relative;

      & > div:nth-last-of-type(3),
      div:nth-last-of-type(4) {
        display: none;
      }

      @media ${mediaQueries('phone')} {
        & > div:nth-last-of-type(3),
        div:nth-last-of-type(4) {
          display: block;
        }
      }
    }

    & .banner-img {
      width: 50%;
      height: 20rem;
      margin-bottom: 5rem;
      background-position: center;
      background-size: cover;
    }
  }
`;

function PropertiesPage() {
  const images = useSelector(state =>
    state.properties.properties.map(img => img.mainImgUrl)
  );

  return (
    <PropertiesSection className="properties-page">
      <div className="banner">
        <div className="banner-title">
          <h2>Aktualne oferty</h2>
        </div>
        <div className="banner-images">
          {images.slice(0, 4).map((item, i) => (
            <div
              key={i}
              className="banner-img"
              style={{ backgroundImage: `url(${item})` }}
            ></div>
          ))}
        </div>
      </div>
      <PropertySmallCards button={false} />
    </PropertiesSection>
  );
}

export default PropertiesPage;
