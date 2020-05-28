import React from 'react';
import { Slide } from 'react-slideshow-image';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { mediaQueries, boxShadows } from '../../../../mixins';
import { useFirestoreConnect } from 'react-redux-firebase';
import Spinner from '../../../adminPanel/spinner/Spinner';

const SpanDiv = styled.div`
  @media ${mediaQueries('tab-port')} {
    bottom: 15%;
  }
  @media ${mediaQueries('tab-land')} {
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
  /* right: 0; */
  bottom: 45%;
  ${boxShadows('xsmall')}
`;

const SlideContainer = styled.div`
  & .nav {
    display: none;
  }

  & .spinner {
    min-height: 42rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  arrows: false,
  pauseOnHover: true,
  indicators: true,
};

function Slider() {
  useFirestoreConnect([
    {
      collection: 'properties',
      orderBy: ['addedDate', 'desc'],
    },
  ]);
  const propertiesArr = useSelector(
    (state) => state.firestore.ordered.properties
  );
  const propertiesFiltered =
    propertiesArr &&
    propertiesArr
      .filter((el) => el.status === 'added')
      .filter((el) => el.banner !== 'Nie');

  return (
    <SlideContainer className="slide-container">
      {propertiesArr ? (
        <Slide {...properties}>
          {propertiesFiltered.slice(0, 6).map((property, i) => (
            <div
              className="each-slide"
              key={i}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <div
                className="lazyload"
                style={{
                  backgroundImage: `url(${property.mainImgUrl})`,
                  height: 600,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <SpanDiv>
                  <span>{property.propertyName}</span>
                </SpanDiv>
              </div>
            </div>
          ))}
        </Slide>
      ) : (
        <div className="spinner">
          <Spinner />
        </div>
      )}
    </SlideContainer>
  );
}

export default Slider;
