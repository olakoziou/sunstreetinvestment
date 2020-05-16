import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import HistoryCard from './HistoryCard';
import { mediaQueries, boxShadows } from '../../../../mixins';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useState } from 'react';
import { colors } from '../../../../colors';
import Spinner from '../../../adminPanel/spinner/Spinner';

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

    & .spinner {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  & .card-opened {
    width: 95%;
    /* height: calc(80vh - 11rem); */
    margin: 0 auto;
    position: fixed;
    left: 2.5%;
    right: 5%;
    top: 15%;
    bottom: 5%;
    background-color: rgba(${colors.secondary6});
    display: none;
    text-align: center;
    ${boxShadows('xsmall')};

    @media ${mediaQueries('phone')} {
      width: 80%;
      ${boxShadows('small')};
    }
    @media ${mediaQueries('tab-port')} {
      width: 70%;
    }

    @media ${mediaQueries('tab-land')} {
      width: 60%;
      top: 20%;
      bottom: 10%;
    }

    & i.close {
      position: absolute;
      top: 1%;
      right: 1%;
      cursor: pointer;
      color: rgba(${colors.extra});
    }

    & .card-content {
      padding: 0.5rem 2rem;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: rgba(${colors.secondary3});

      @media ${mediaQueries('tab-port')} {
        padding: 0.5rem 4rem;
      }

      & .card-title {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 5rem;
        font-size: 1.6rem;
        color: rgba(${colors.secondary2});
        @media ${mediaQueries('phone')} {
          min-height: 10rem;
        }

        @media ${mediaQueries('tab-land')} {
          min-height: 5rem;
        }
      }

      & .top {
        & .history-card__costs {
          & ul {
            & > span {
              color: rgba(${colors.secondary2});
              font-size: 1.2rem;
              display: block;
              padding: 0.5rem;
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
        }

        & .history-card__info {
          & span {
            color: rgba(${colors.secondary2});
            font-size: 1.2rem;
            display: block;
            padding: 0.5rem;
          }
        }
      }

      & .bottom {
        & .history-card__summary {
          & ul {
            & > span {
              color: rgba(${colors.secondary2});
              padding: 0.5rem;
              font-size: 1.2rem;
              display: block;
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
        }
      }
    }
  }
`;

function HistoryPage() {
  useFirestoreConnect([
    {
      collection: 'oldCases',
      orderBy: ['addedDate', 'desc'],
    },
  ]);
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
    const card = document.querySelectorAll('.card .card-content');
    const btn = document.querySelectorAll('.btn');
    card.forEach((el) => (el.style.filter = 'blur(0)'));
    btn.forEach((el) => (el.style.filter = 'blur(0)'));
  };
  return (
    <HistorySection className="history-page">
      <h2>Archiwum</h2>
      <div className="history">
        {oldCases ? (
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
              commissions={oldCase.comissions}
              mthCost={oldCase.mthCost}
              info={oldCase.info}
              setState={setState}
            />
          ))
        ) : (
          <div className="spinner">
            <Spinner />
          </div>
        )}
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
                  {state.mthCost && (
                    <li>
                      <i className="item material-icons">
                        keyboard_arrow_right
                      </i>
                      <span>Opłaty miesięczne: {state.mthCost} zł</span>
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
