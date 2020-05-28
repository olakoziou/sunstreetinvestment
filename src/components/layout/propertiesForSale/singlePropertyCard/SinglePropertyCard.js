import React from 'react';
import styled from 'styled-components';
import { boxShadows, mediaQueries } from '../../../../mixins';
import { colors } from '../../../../colors';
import Description from './Description';
import Details from './Details';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

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

      & .title,
      .stan {
        @media ${mediaQueries('phone')} {
          text-align: left;
          right: 0;
          width: max-content;
        }

        border-top: 1px solid rgba(255, 255, 255, 0.75);
        border-left: 1px solid rgba(255, 255, 255, 0.75);
        border-bottom: 1px solid rgba(255, 255, 255, 0.75);
        width: 100%;
        padding: 1rem 2rem;
        font-size: 2rem;
        text-align: center;
        position: absolute;
        z-index: 1000;

        ${boxShadows('xsmall')}
      }

      & .title {
        bottom: 15%;
        background-color: rgba(255, 255, 255, 0.5);
      }

      & .stan {
        position: absolute;
        bottom: 40%;
        left: 0;
        right: 0;
        width: 80%;
        margin: 0 auto;
        text-align: center;
        background-color: rgba(${colors.extra});
        border-right: 1px solid rgba(255, 255, 255, 0.75);
      }

      & .stan__active {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(${colors.primary}, 0.25);
      }
    }

    & .property-card__banner-half {
      background-position: center;
      width: 100%;
      height: 40rem;
      position: relative;

      & .title,
      .stan {
        @media ${mediaQueries('tab-land')} {
          text-align: left;
          right: 0;
          width: max-content;
        }

        border-top: 1px solid rgba(255, 255, 255, 0.75);
        border-left: 1px solid rgba(255, 255, 255, 0.75);
        border-bottom: 1px solid rgba(255, 255, 255, 0.75);
        width: 100%;
        padding: 1rem 2rem;
        font-size: 2rem;
        text-align: center;
        position: absolute;
        z-index: 1000;

        ${boxShadows('xsmall')}
      }

      & .title {
        bottom: 15%;
        background-color: rgba(255, 255, 255, 0.5);
      }

      & .stan {
        position: absolute;
        bottom: 40%;
        left: 0;
        right: 0;
        width: 80%;
        margin: 0 auto;
        text-align: center;
        background-color: rgba(${colors.extra});
        border-right: 1px solid rgba(255, 255, 255, 0.75);
      }

      & .stan__active {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(${colors.primary}, 0.25);
      }
    }

    & .wrapper {
      max-width: 1920px;
      padding: 0 2rem;
      margin: 0 auto;

      & .property-card__content {
        max-width: 95%;
        margin: 2rem auto;
        display: flex;
        flex-direction: column;

        @media ${mediaQueries('tab-land')} {
          flex-direction: row;
        }
      }
    }
  }
`;

function SinglePropertyCard(props) {
  useEffect(() => {
    !props.location.state && history.push('/nieruchomosci');
  }, []);
  const { title, img, stan, banner } = props.location.state || {};
  const stanFiltered = stan && stan !== 'Ponownie w sprzedaży';
  const history = useHistory();

  return (
    <PropertyCardSection className="property">
      <div className="property-card">
        {banner === 'Nie' ? (
          <div
            className="property-card__banner-half"
            style={{ backgroundImage: `url(${img})` }}
          >
            {!stanFiltered && <span className="title">{title}</span>}

            {stanFiltered && (
              <div className="stan__active">
                <span className="stan">
                  {title} - {stan}
                </span>
              </div>
            )}
          </div>
        ) : (
          <div
            className="property-card__banner"
            style={{ backgroundImage: `url(${img})` }}
          >
            {!stanFiltered && <span className="title">{title}</span>}

            {stanFiltered && (
              <div className="stan__active">
                <span className="stan">
                  {title} - {stan}
                </span>
              </div>
            )}
          </div>
        )}

        <div className="wrapper">
          <div className="property-card__content">
            <Description data={props.location.state} displayImgs={true} />
            <Details data={props.location.state} />
          </div>
        </div>
      </div>
    </PropertyCardSection>
  );
}

export default SinglePropertyCard;
