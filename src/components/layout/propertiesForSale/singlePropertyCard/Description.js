import React from 'react';
import styled from 'styled-components';
import { boxShadows, mediaQueries } from '../../../../mixins';
import { colors } from '../../../../colors';

const DescriptionDiv = styled.div`
  position: relative;
  padding: 0 2rem;

  & .image-big {
    display: none;
    & i {
      position: absolute;
      top: 1%;
      right: 1%;
      cursor: pointer;
      color: rgba(${colors.primary4});
    }

    margin: 0 auto;
    height: 25rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    ${boxShadows('big')};
    z-index: 1000;

    @media ${mediaQueries('tab-phone')} {
      width: 90%;
    left: 5%;
    top: 30%;
    }

    @media ${mediaQueries('tab-port')} {
      width: 80%;
      height: 40rem;
      top: 15%;
      left: 10%;
    }

    @media ${mediaQueries('tab-land')} {
      width: 55%;

    }
  }

  
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
    & h6 {
      text-align: center;
    }
  }

  & .gallery .images, .property-plan .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 10rem;
    margin: 1rem 0 3.5rem;

    & .img {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      width: 100%;
      height: 10rem;
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
  const { description, propertyPlanUrl, extra, newFiltered } = props.data;
  const { displayImgs } = props;

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

  console.log(newFiltered);
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
      {displayImgs && newFiltered && newFiltered.length > 0 ? (
        <>
          <div className="gallery">
            <h6>Pozostałe zdjęcia</h6>
            <div className="images">
              {newFiltered.map((img, i) => (
                <div
                  className="img"
                  key={i}
                  style={{ backgroundImage: `url(${img})` }}
                  onClick={handleImgClick}
                ></div>
              ))}
            </div>
          </div>
        </>
      ) : null}
      {displayImgs && propertyPlanUrl ? (
        <>
          <div className="property-plan">
            <h6>Plan nieruchomości</h6>
            <div className="images">
              <div
                className="img"
                style={{ backgroundImage: `url(${propertyPlanUrl})` }}
                onClick={handleImgClick}
              ></div>
            </div>
          </div>
        </>
      ) : null}
    </DescriptionDiv>
  );
}

export default Description;
