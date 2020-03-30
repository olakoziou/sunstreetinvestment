import React from 'react';
import OurJob from './OurJob';
import OurHistory from './OurHistory';
import styled from 'styled-components';
import { colors } from '../../../../colors';
import { boxShadows, mediaQueries } from '../../../../mixins';

const SectionAbout = styled.section`
  background-color: rgba(${colors.secondary6}, 0.9);
  margin: 5rem 0;
  min-height: 30rem;
  /* height: 30rem; */
  padding: 3rem 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${mediaQueries('tab-port')} {
    margin: 8rem 0;
  }
`;

const DivAbout = styled.div`
  position: relative;
  z-index: 1;
  width: 80%;
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media ${mediaQueries('tab-port')} {
    flex-direction: row;
    height: 30rem;
  }
  & > div {
    width: 100%;
    max-width: 45rem;
    padding: 2rem 1rem;
    /* height: 80%; */
    margin: 1rem 0;
    ${boxShadows('medium')};
    border-radius: 2px;
    transition: all 0.2s;
    color: rgba(${colors.secondary}, 1);
    z-index: 1000;
    position: relative;

    &:hover {
      transform: scale(1.05);
    }

    @media ${mediaQueries('phone')} {
      width: 80%;
    }

    @media ${mediaQueries('tab-port')} {
      width: 50%;
      position: absolute;
    }
  }

  & h4 {
    text-align: center;
  }
`;

function About() {
  return (
    <SectionAbout id="about">
      <DivAbout>
        <OurJob />
        <OurHistory />
      </DivAbout>
    </SectionAbout>
  );
}

export default About;
