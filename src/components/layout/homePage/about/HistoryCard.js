import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../colors';
import { mediaQueries } from '../../../../mixins';

const HistoryDiv = styled.div`
  width: 100%;
  min-width: 25rem;
  max-width: 5rem;
  transition: all 0.2s;
  display: flex;
  flex-wrap: wrap;

  @media ${mediaQueries('phone')} {
    width: 50%;
    max-width: 35rem;
  }

  &:hover {
    transform: scale(1.05);
  }

  & .card {
    background-color: rgba(${colors.secondary6});
    position: relative;

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

    & li {
      display: flex;
      align-items: center;

      i {
        color: rgba(${colors.extra});
      }
    }

    & .card-title {
      display: flex;
      min-height: 5rem;
      align-items: center;
      justify-content: center;
    }
  }
`;

function HistoryCard(props) {
  const {
    id,
    name,
    description,
    buyPrice,
    sellPrice,
    metrage,
    otherCosts,
    notary,
    renovation,
    commissions,
    mthCosts,
    info,
  } = props;
  const investment =
    buyPrice + otherCosts + notary + renovation + commissions + mthCosts;
  const roi =
    (
      (sellPrice - (investment + otherCosts)) /
      (investment + otherCosts)
    ).toFixed(2) * 100;

  return (
    <HistoryDiv className="history-card container">
      {' '}
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">{name}</span>
              <div className="top">
                <div className="history-card__costs">
                  <ul>
                    <span>Koszty początkowe</span>
                    <li>
                      <i className=" material-icons">keyboard_arrow_right</i>
                      <span>Cena zakupu: {buyPrice} zł</span>
                    </li>
                    <li>
                      <i className=" material-icons">keyboard_arrow_right</i>
                      <span>Cena sprzedaży {sellPrice} zł</span>
                    </li>
                    <li>
                      <i className=" material-icons">keyboard_arrow_right</i>
                      <span>Notariusz: {notary} zł</span>
                    </li>
                    <li>
                      <i className=" material-icons">keyboard_arrow_right</i>
                      <span>Remont: {renovation} zł</span>
                    </li>
                    <li>
                      <i className=" material-icons">keyboard_arrow_right</i>
                      <span>Prowizje: {commissions} zł</span>
                    </li>
                    <li>
                      <i className=" material-icons">keyboard_arrow_right</i>
                      <span>Opłaty miesięczne: {mthCosts} zł</span>
                    </li>
                    <li>
                      <i className=" material-icons">keyboard_arrow_right</i>
                      <span>Pozostałe koszty: {otherCosts} zł</span>
                    </li>
                    <li>
                      <i className=" material-icons">keyboard_arrow_right</i>
                      <span>ROI: {roi} %</span>
                    </li>
                  </ul>
                </div>
                <div className="history-card__info">
                  <span>Inne informacje</span>
                  <p>{info}</p>
                </div>
              </div>
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
          </div>
        </div>
      </div>
    </HistoryDiv>
  );
}

export default HistoryCard;
