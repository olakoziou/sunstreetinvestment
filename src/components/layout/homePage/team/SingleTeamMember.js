import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../colors';
import { boxShadows, mediaQueries } from '../../../../mixins';

const DivMember = styled.div`
  min-width: 15rem;
  width: 20rem;
  margin: 5rem 2rem;
  background-color: rgba(${colors.secondary5});
  ${boxShadows('small')};
  position: relative;

  @media ${mediaQueries('phone')} {
    height: 25rem;
  }

  @media ${mediaQueries('tab-land')} {
    width: 25rem;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(${colors.primary5});
    transition: all 0.2s;
    transform: skew(-3deg);
    z-index: -100;
  }

  &:hover:after {
    transform: skew(-1deg);
  }

  & .single-team-member__image {
    position: relative;
    transform: translateY(-6rem);
  }

  & .single-team-member__image > .img {
    background-position: center;
    background-size: cover;
    height: 10rem;
    width: 10rem;
    margin: 0 auto;
    border-radius: 50%;
    border: 5px solid rgba(${colors.primary5});
    ${boxShadows('small')};
  }
  & .single-team-member__image > .initials {
    height: 10rem;
    width: 10rem;
    margin: 0 auto;
    border-radius: 50%;
    border: 5px solid rgba(${colors.primary5});
    color: rgba(${colors.secondary5});
    font-size: 2rem;
    background-color: rgba(${colors.primary3});
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .single-team-member__content {
    position: relative;
    transform: translateY(-6rem);
    text-align: center;
    padding: 1rem;

    & h5 {
      margin: 1rem;
      font-size: 1.6rem;

      & span {
        color: rgba(${colors.extra}, 1);
        text-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
      }
    }

    & p {
      font-size: 1.1rem;
      padding: 1rem;
    }
  }
`;

function SingleTeamMember(props) {
  const { name, lastName, description, img } = props;
  return (
    <DivMember className="single-team-member">
      <div className="single-team-member__image">
        {img ? (
          <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
        ) : (
          <div className="initials">
            <span>
              {name[0]}
              {lastName[0]}
            </span>
          </div>
        )}
      </div>
      <div className="single-team-member__content">
        <h5>
          {name} <span>{lastName}</span>
        </h5>
        <p>{description}</p>
      </div>
    </DivMember>
  );
}

export default SingleTeamMember;
