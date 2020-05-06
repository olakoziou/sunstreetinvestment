import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import HistoryCard from './HistoryCard';
import { mediaQueries } from '../../../../mixins';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useState } from 'react';
import { colors } from '../../../../colors';

const HistorySection = styled.section`
  margin: 5rem 0;
  position: relative;

  & h2 {
    text-align: center;
    padding: 3rem 0;
  }

  & .history {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    text-align: center;
    position: relative;

    @media ${mediaQueries('phone')} {
      width: 80%;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  & .card-opened {
    width: 90%;
    /* height: calc(80vh - 11rem); */
    margin: 0 auto;
    position: fixed;
    left: 5%;
    right: 5%;
    top: 15%;
    bottom: 5%;
    background-color: #ddd;
    display: none;
    text-align: center;

    & i.close {
      position: absolute;
      top: 1%;
      right: 1%;
      cursor: pointer;
    }

    & .card-title {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 5rem;
      font-size: 1.2rem;

      @media ${mediaQueries('phone')} {
        min-height: 10rem;
      }

      @media ${mediaQueries('tab-land')} {
        min-height: 5rem;
      }
    }

    & li {
      display: flex;
      align-items: center;
      justify-content: center;

      & i.item {
        color: rgba(${colors.extra});
      }
    }
  }
`;

function HistoryPage() {
  useFirestoreConnect('oldCases');
  const oldCases = useSelector((state) => state.firestore.ordered.oldCases);
  const oldCasesFiltered =
    oldCases && oldCases.filter((el) => el.status === 'added');
  const [state, setState] = useState({
    title: '',
    buyPrice: '',
    sellPrice: '',
    otherCosts: '',
    notary: '',
    renovation: '',
    commissions: '',
    mthCosts: '',
    description: '',
  });

  const handleClose = (e) => {
    const cardOpened = e.target.parentElement;
    cardOpened.style.display = 'none';
  };
  return (
    <HistorySection className="history-page">
      <h2>Archiwum</h2>
      <div className="history">
        {oldCases &&
          oldCasesFiltered.map((oldCase, i) => (
            <HistoryCard
              key={i}
              id={oldCase.propertyId}
              name={oldCase.propertyName}
              description={oldCase.propertyDescription}
              buyPrice={oldCase.buyPrice}
              sellPrice={oldCase.sellPrice}
              metrage={oldCase.metrage}
              otherCosts={oldCase.otherCosts}
              notary={oldCase.notary}
              renovation={oldCase.renovation}
              commissions={oldCase.commissions}
              mthCosts={oldCase.mthCosts}
              info={oldCase.info}
              setState={setState}
            />
          ))}
        <div className="card-opened">
          <div className="card-content">
            <span className="card-title">{state.title}</span>
            <div className="top">
              <div className="history-card__costs">
                <ul>
                  <span>Koszty początkowe</span>
                  <li>
                    <i className="item material-icons">keyboard_arrow_right</i>
                    <span>Cena zakupu: {state.buyPrice} zł</span>
                  </li>
                  <li>
                    <i className="item material-icons">keyboard_arrow_right</i>
                    <span>Cena sprzedaży {state.sellPrice} zł</span>
                  </li>
                  {state.notary && (
                    <li>
                      <i className="item material-icons">
                        keyboard_arrow_right
                      </i>
                      <span>Notariusz: {state.notary} zł</span>
                    </li>
                  )}
                  {state.renovation && (
                    <li>
                      <i className="item material-icons">
                        keyboard_arrow_right
                      </i>
                      <span>Remont: {state.renovation} zł</span>
                    </li>
                  )}
                  {state.commissions && (
                    <li>
                      <i className="item material-icons">
                        keyboard_arrow_right
                      </i>
                      <span>Prowizje: {state.commissions} zł</span>
                    </li>
                  )}
                  {state.mthCosts && (
                    <li>
                      <i className="item material-icons">
                        keyboard_arrow_right
                      </i>
                      <span>Opłaty miesięczne: {state.mthCosts} zł</span>
                    </li>
                  )}
                  {state.otherCosts && (
                    <li>
                      <i className="item material-icons">
                        keyboard_arrow_right
                      </i>
                      <span>Pozostałe koszty: {state.otherCosts} zł</span>
                    </li>
                  )}
                  <li>
                    <i className="item material-icons">keyboard_arrow_right</i>
                    <span>ROI: {state.roi} %</span>
                  </li>
                </ul>
              </div>
              {state.description && (
                <div className="history-card__info">
                  <span>Inne informacje</span>
                  <p>{state.description}</p>
                </div>
              )}
            </div>
            <div className="bottom">
              <div className="history-card__summary">
                <ul>
                  <span>Podsumowanie</span>
                  <li>
                    <i className="item material-icons">keyboard_arrow_right</i>
                    <span>Inwestycja: {state.investment} zł</span>
                  </li>
                  <li>
                    <i className="item material-icons">keyboard_arrow_right</i>
                    <span>Cena sprzedaży: {state.sellPrice} zł</span>
                  </li>
                  <li>
                    <i className="item material-icons">keyboard_arrow_right</i>
                    <span>Zysk: {state.sellPrice - state.investment} zł</span>
                  </li>
                  <li>
                    <i className="item material-icons">keyboard_arrow_right</i>
                    <span>ROI: {state.roi} %</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <i className="material-icons small close" onClick={handleClose}>
            close
          </i>
        </div>
      </div>
    </HistorySection>
  );
}

export default HistoryPage;
