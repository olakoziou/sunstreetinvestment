import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../colors';

const HistoryDiv = styled.div`
  width: 40%;
  transition: all 0.2s;
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
      transform: skew(-3deg);
      z-index: -100;
    }

    & li {
      display: flex;
      align-items: center;

      i {
        color: rgba(${colors.extra});
      }
    }
  }
`;

function HistoryCard(props) {
  const { id, name, description, buyPrice, sellPrice, metrage, costs } = props;
  const roi =
    ((sellPrice - (buyPrice + costs)) / (buyPrice + costs)).toFixed(2) * 100;

  return (
    <HistoryDiv className="history-card container">
      {' '}
      <div class="row">
        <div class="col s12">
          <div class="card">
            <div class="card-content">
              <span class="card-title">{name}</span>
              <p>{description}</p>
              <ul>
                <li>
                  <i class=" material-icons">keyboard_arrow_right</i>
                  <span>Cena zakupu: {buyPrice} zł</span>
                </li>
                <li>
                  <i class=" material-icons">keyboard_arrow_right</i>
                  <span>Cena sprzedaży {sellPrice} zł</span>
                </li>
                <li>
                  <i class=" material-icons">keyboard_arrow_right</i>Po
                  <span>zostałe koszty: {costs} zł</span>
                </li>
                <li>
                  <i class=" material-icons">keyboard_arrow_right</i>RO
                  <span>I: {roi} %</span>
                </li>
                <li>
                  <i class=" material-icons">keyboard_arrow_right</i>Me
                  <span>traż {metrage} zł/m2</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </HistoryDiv>
  );
}

export default HistoryCard;
