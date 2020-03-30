import React from 'react';
import imgAuthor from '../../../../img/team/001.jpg';
import styled from 'styled-components';
import { mediaQueries } from '../../../../mixins';
import { colors } from '../../../../colors';

const DetailsnDiv = styled.div`
  padding: 2rem;
  background-color: rgba(${colors.extra}, 0.75);
  display: flex;
  flex-direction: column;

  @media ${mediaQueries('tab-port')} {
    flex-direction: row;
  }

  @media ${mediaQueries('tab-land')} {
    flex-direction: column;
    width: 30%;
  }

  & .infos {
    @media ${mediaQueries('tab-port')} {
      width: 50%;
    }

    @media ${mediaQueries('tab-land')} {
      width: 100%;
    }

    & h5 {
      text-align: center;
      padding-bottom: 2rem;
    }
    & .infos-list {
      width: 90%;
      margin: 0 auto;

      @media ${mediaQueries('phone')} {
        width: 70%;
      }

      @media ${mediaQueries('tab-land')} {
        width: 95%;
      }

      & li {
        display: flex;
        justify-content: space-between;
        padding: 0.25rem;
        margin-bottom: 0.75rem;
        color: ${colors.secondary3};
        border-bottom: 1px solid rgba(${colors.secondary6}, 0.25);
        & span {
          text-align: right;
        }
      }
    }
  }
  & .author {
    padding: 2rem;

    @media ${mediaQueries('tab-port')} {
      padding: 0;
    }
    & h5 {
      text-align: center;
      padding-bottom: 2rem;
    }

    & .author-details {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      max-width: 80%;
      margin: 0 auto;
      & .image {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        border: 2px solid rgba(${colors.secondary});
      }

      & .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        & span.name {
          display: block;
          text-align: center;
          font-size: 1.4rem;
          padding: 0.3rem;
        }

        & .contact {
          & > div {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
`;

function Details(props) {
  const {
    purpose,
    market,
    price,
    metrage,
    type,
    rooms,
    floor,
    numbOfFloors,
    elevator,
    kitchen,
    standard,
    balcony,
    garage,
    year,
    technology
  } = props.data;
  return (
    <DetailsnDiv className="property-card__content-details">
      <div className="infos">
        <h5>Dane techniczne</h5>
        <ul className="infos-list">
          {purpose ? (
            <li>
              <span>Cel: </span>
              <span>{purpose}</span>
            </li>
          ) : null}
          {market ? (
            <li>
              <span>Rynek: </span>
              <span>{market}</span>
            </li>
          ) : null}
          {type ? (
            <li>
              <span>Typ: </span>
              <span>{type}</span>
            </li>
          ) : null}
          {price ? (
            <li>
              <span>Cena: </span>
              <span>{price} zł</span>
            </li>
          ) : null}
          {metrage ? (
            <li>
              <span>Metraż: </span>
              <span>{metrage} m2</span>
            </li>
          ) : null}
          {price && metrage ? (
            <li>
              <span>Cena/m2: </span>
              <span>{(price / metrage).toFixed(2)} zł/m2</span>
            </li>
          ) : null}
          {year ? (
            <li>
              <span>Rok budowy: </span>
              <span>{year}</span>
            </li>
          ) : null}
          {rooms ? (
            <li>
              <span>Pokoje: </span>
              <span>{rooms}</span>
            </li>
          ) : null}
          {floor ? (
            <li>
              <span>Piętro: </span>
              <span>{floor}</span>
            </li>
          ) : null}
          {numbOfFloors ? (
            <li>
              <span>Liczba pięter: </span>
              <span>{numbOfFloors}</span>
            </li>
          ) : null}
          {elevator ? (
            <li>
              <span>Winda: </span>
              <span>{elevator}</span>
            </li>
          ) : null}
          {kitchen ? (
            <li>
              <span>Kuchnia: </span>
              <span>{kitchen}</span>
            </li>
          ) : null}
          {standard ? (
            <li>
              <span>Standard: </span>
              <span>{standard}</span>
            </li>
          ) : null}
          {balcony ? (
            <li>
              <span>Balkon: </span>
              <span>{balcony}</span>
            </li>
          ) : null}
          {garage ? (
            <li>
              <span>Garaż: </span>
              <span>{garage}</span>
            </li>
          ) : null}
          {technology ? (
            <li>
              <span>Technologia: </span>
              <span>{technology}</span>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="author">
        <h5>Opiekun oferty</h5>
        <div className="author-details">
          <div
            className="image"
            style={{ backgroundImage: `url(${imgAuthor})` }}
          ></div>
          <div className="info">
            <span className="name">Krzysztof Kozioł</span>
            <div className="contact">
              <div>
                <i className="material-icons small">local_phone</i>
                <span>730173031</span>
              </div>
              <div>
                <i className="material-icons small">mail_outline</i>
                <span>biuro@sunstreetinvestment.pl</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DetailsnDiv>
  );
}

export default Details;
