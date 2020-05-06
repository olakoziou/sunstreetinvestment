import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../colors';
import { mediaQueries } from '../../../../mixins';
import { Link } from 'react-router-dom';

const HistoryDiv = styled.div`
  width: 100%;
  position: relative;
  transition: all 0.2s;

  @media ${mediaQueries('phone')} {
    width: 50%;
    max-width: 35rem;
    min-width: 25rem;
  }

  @media ${mediaQueries('tab-land')} {
    width: 33%;
  }

  &:hover {
    transform: scale(1.05);
  }

  & .row {
    width: 100%;
    & .card {
      background-color: rgba(${colors.secondary6});
      position: relative;
      /* min-width: 25rem; */

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(${colors.primary5});
        transform: skew(-2deg);
        z-index: -100;
        display: none;

        @media ${mediaQueries('phone')} {
          display: block;
        }
      }

      & .card-title {
        display: flex;
        min-height: 5rem;
        align-items: center;
        justify-content: center;
        color: rgba(${colors.secondary2});
        @media ${mediaQueries('phone')} {
          min-height: 10rem;
        }

        @media ${mediaQueries('tab-land')} {
          min-height: 5rem;
        }
      }

      & ul {
        & span {
          color: rgba(${colors.secondary3});
        }
        & li {
          display: flex;
          align-items: center;
          color: rgba(${colors.secondary3});

          i {
            color: rgba(${colors.extra});
          }
        }
      }

      & .btn {
        background-color: rgba(${colors.primary2});
        margin-bottom: 1rem;
        transition: all 0.2s;

        &:hover {
          background-color: rgba(${colors.primary3});
        }
      }
    }
  }
`;

function HistoryCard(props) {
  const {
    name,
    buyPrice,
    sellPrice,
    otherCosts,
    notary,
    renovation,
    commissions,
    mthCosts,
    description,
    setState,
  } = props;

  const sum = (...args) => {
    return args
      .filter((el) => el !== undefined)
      .reduce((a, b) => parseInt(a) + parseInt(b));
  };

  const investment =
    buyPrice &&
    sum(buyPrice, otherCosts, notary, renovation, commissions, mthCosts);

  const roi = ((sellPrice - investment) / investment).toFixed(2) * 100;

  const handleOpen = (e) => {
    const cardOpened = document.querySelector('.card-opened');
    const card = document.querySelectorAll('.card .card-content');
    const btn = document.querySelectorAll('.btn');
    cardOpened.style.display = 'block';

    card.forEach((el) => (el.style.filter = 'blur(2px)'));
    btn.forEach((el) => (el.style.filter = 'blur(2px)'));

    setState({
      title: name,
      buyPrice,
      sellPrice,
      otherCosts,
      notary,
      renovation,
      commissions,
      mthCosts,
      description,
      investment,
      roi,
    });
  };

  return (
    <HistoryDiv className="history-card container">
      {' '}
      <Link to={`/archiwum/${name}`}>
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-content">
                <span className="card-title">{name}</span>

                <div className="bottom">
                  <div className="history-card__summary">
                    <ul>
                      <span>Podsumowanie</span>
                      <li>
                        <i className=" material-icons">keyboard_arrow_right</i>
                        <span>Inwestycja: {investment} zł</span>
                      </li>
                      <li>
                        <i className=" material-icons">keyboard_arrow_right</i>
                        <span>Cena sprzedaży: {sellPrice} zł</span>
                      </li>
                      <li>
                        <i className=" material-icons">keyboard_arrow_right</i>
                        <span>Zysk: {sellPrice - investment} zł</span>
                      </li>
                      <li>
                        <i className=" material-icons">keyboard_arrow_right</i>
                        <span>ROI: {roi} %</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="btn" onClick={handleOpen}>
                Więcej
              </div>
            </div>
          </div>
        </div>
      </Link>
    </HistoryDiv>
  );
}

export default HistoryCard;
