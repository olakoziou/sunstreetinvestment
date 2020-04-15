import React from 'react';
import styled from 'styled-components';
import { boxShadows, mediaQueries } from '../../../../mixins';
import { colors } from '../../../../colors';

const DescriptionDiv = styled.div`
  position: relative;

  & .image-big {
    display: none;
    & i {
      position: absolute;
      top: 1%;
      right: 1%;
      cursor: pointer;
      color: rgba(${colors.primary4});
    }

    width: 90%;
    margin: 0 auto;
    height: 15rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    left: 5%;
    top: 30%;
    ${boxShadows('big')};
    z-index: 1000;

    @media ${mediaQueries('tab-phone')} {
      width: 80%;
      height: 20rem;
      top: 10%;
      left: 10%;
    }

    @media ${mediaQueries('tab-port')} {
      width: 70%;
      height: 25rem;
      top: 2%;
      left: 15%;
    }
  }

  padding: 0 2rem;
  position: relative;
  @media ${mediaQueries('tab-land')} {
    width: 70%;
  }
  & .description {
    position: relative;

    & h4 {
      text-align: center;
      margin: 3.5rem 0;
    }

    & p {
      text-align: center;
      font-size: 1.3rem;
      line-height: 1.8;

      @media ${mediaQueries('tab-land')} {
        font-size: 1.2rem;
      }
    }
  }

  & .extra-infos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 2.5rem 0;

    & > div {
      width: 8rem;
      margin: 0.5rem;
      padding: 0.7rem;
      background-color: rgba(${colors.primary5});
      color: rgba(${colors.secondary5});
      text-align: center;
      font-size: 0.8rem;
      font-weight: bold;
      border-radius: 4px;

      @media ${mediaQueries('tab-port')} {
        width: 9.5rem;
        font-size: 0.9rem;
        padding: 0.9rem;
      }
    }
  }

  & .gallery, .property-plan {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 10rem;
    margin: 3.5rem 0;

    @media ${mediaQueries('phone')} {
      height: 15rem;
    }

 

    & .img {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      width: 30%;
      max-width: 20rem;
      margin: 0.5rem;
      ${boxShadows('small')};
      position: relative;
      cursor: pointer;
      /* @media ${mediaQueries('tab-port')} {
        width: 20%;
      } */
    }
  }
`;

function Description(props) {
  const { description, imgUrlArr, propertyPlanUrl, extra } = props.data;
  const { displayImgs } = props;

  console.log(props.data);

  const handleImgClick = (e) => {
    const imgUrl = e.target.style.backgroundImage;
    const imageBig = document.querySelector('.image-big');
    const description = document.querySelector('.description');
    imageBig.style.display = 'block';
    imageBig.style.backgroundImage = imgUrl;
    description.style.filter = 'blur(3px)';
  };

  const handleImgClose = (e) => {
    const imageBig = document.querySelector('.image-big');
    const description = document.querySelector('.description');
    imageBig.style.display = 'none';
    imageBig.style.backgroundImage = '';
    description.style.filter = 'blur(0)';
  };
  return (
    <DescriptionDiv className="property-card__content-description">
      <div className="image-big">
        <i className="material-icons small" onClick={handleImgClose}>
          close
        </i>
      </div>
      <div className="description">
        <h4>Opis oferty</h4>
        <p>{description}</p>
      </div>
      <div className="extra-infos">
        {extra &&
          extra.map((extra, i) => (extra ? <div key={i}>{extra}</div> : null))}
      </div>
      {displayImgs && imgUrlArr ? (
        <div className="gallery">
          {imgUrlArr.map((img, i) => (
            <div
              className="img"
              key={i}
              style={{ backgroundImage: `url(${img})` }}
              onClick={handleImgClick}
            ></div>
          ))}
        </div>
      ) : null}
      {displayImgs && propertyPlanUrl ? (
        <div className="property-plan">
          <div
            className="img"
            style={{ backgroundImage: `url(${propertyPlanUrl})` }}
            onClick={handleImgClick}
          ></div>
        </div>
      ) : null}
    </DescriptionDiv>
  );
}

export default Description;
