import React from 'react';
import { Slide } from 'react-slideshow-image';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { mediaQueries, boxShadows } from '../../../../mixins';
import { colors } from '../../../../colors';
import { useFirestoreConnect } from 'react-redux-firebase';

const SpanDiv = styled.div`
  @media only screen and (min-width: 600px) {
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
  bottom: 15%;
  ${boxShadows('xsmall')}
`;

const SlideContainer = styled.div`
  & .nav {
    display: none;
  }
`;

const properties = {
  duration: 50000,
  transitionDuration: 500,
  infinite: true,
  arrows: true,
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
  // const propertiesArr = useSelector((state) =>
  //   state.properties.properties.map((property) => property)
  // );
  return propertiesArr ? (
    <>
      <SlideContainer className="slide-container">
        <Slide {...properties}>
          {propertiesArr &&
            propertiesArr.slice(0, 4).map((property, i) => (
              <div
                className="each-slide"
                key={i}
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <div
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
      </SlideContainer>
    </>
  ) : null;
}

export default Slider;
