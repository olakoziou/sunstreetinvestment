import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../colors';

const GuideDiv = styled.div`
  & .item__main {
    & span {
      color: rgba(${colors.primary2});
      font-weight: bold;
    }
  }
`;

function Guide() {
  return (
    <GuideDiv className="guide">
      <h2>Instrukcja</h2>
      <ul>
        <li className="item__main">
          <span>Dodaj nową nieruchomość</span>:
          <ul>
            <li>
              1. Jeśli oferta ma być dodana na stronę Archiwum (pierwsze
              inwestycje SSI), zaznacz checkbox
            </li>
            <li>
              2. Pola Nazwa oferty, Zdjęcie Główne oraz Opiekun oferty są
              wymagane
            </li>
            <li>
              3. Zatwierdzenie oferty nie jest równoznaczne z dodaniem oferty na
              stronę
            </li>
          </ul>
        </li>
        <li className="item__main">
          Dodane nieruchomości<span></span>
        </li>
        <li className="item__main">
          <span>Archiwum</span>
        </li>
        <li className="item__main">
          <span>Usunięte nieruchomości</span>
        </li>
        <li className="item__main">
          <span>Użytkownicy</span>
        </li>
        <li className="item__main">
          <span>Konto</span>
        </li>
        <li className="item__main">
          <span>Strona główna</span>
        </li>
      </ul>
    </GuideDiv>
  );
}

export default Guide;
