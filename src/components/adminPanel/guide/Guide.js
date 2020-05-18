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
      <h5>Instrukcja</h5>
      <ul>
        <li className="item__main">
          <span>Dodaj nową nieruchomość</span>:
          <ul>
            <li>
              1. Jeśli oferta ma być dodana na stronę Archiwum (pierwsze
              inwestycje SSI), zaznacz checkbox.
            </li>
            <li>2. Pola z * są wymagane.</li>
            <li>
              3. Zatwierdzenie oferty nie jest równoznaczne z dodaniem oferty na
              stronę.
            </li>
          </ul>
        </li>
        <li className="item__main">
          <span>Dodane nieruchomości</span>
          <ul>
            <li>
              1. Tu znajdują się wszystkie dodane nieruchomości z
              wyszczególnionymi informacjami. Jeśli nie ma błędów, kliknij
              DODAJ. Oferta zostanie dodana na stronę.
            </li>
            <li>
              2. Jeżeli zauważysz błąd, EDYTUJ ofertę lub ją USUŃ.{' '}
              <strong>
                Po każdej edycji wróć na stronę główną i ponownie wejdź w link
                do oferty.
              </strong>
            </li>{' '}
            <li>
              3. Jeśli nieruchomość została sprzedana, zarezerwowana lub została
              podpisana umowa przedwstępna, kliknij EDYTUJ i zaznacz odpowiednią
              opcję (Stan).
            </li>
            <li>
              4. Jeśli nieruchomość została ponownie wprowadzona do sprzedaży,
              EDYTUJ i wybierz odpowiednią opcję.
            </li>
          </ul>
        </li>
        <li className="item__main">
          <span>Archiwum</span>
          <ul>
            <li>JW</li>
          </ul>
        </li>
        <li className="item__main">
          <span>Usunięte nieruchomości</span>
          <ul>
            <li>
              1. Tu znajdują się nieruchomości usunięte z zakładek{' '}
              <strong>Dodane nieruchomości</strong> oraz{' '}
              <strong>Archiwum</strong>.
            </li>
            <li>2. Możesz je przywrócić lub usunąć na stałe.</li>
            <li>
              3. Po przywróceniu znajdą się w odpowiedniej zakładce. Możesz je
              edytować lub dodać na stronę.
            </li>
          </ul>
        </li>
        <li className="item__main">
          <span>Użytkownicy</span>
          <ul>
            <li>
              1. W tej zakładce znajdziesz WSZYSTKICH użytkowników, którzy się
              zarejestrowali.
            </li>
            <li>
              2. Możesz ich zatwierdzić i dodać na stronę, usunąć ze strony lub
              całkowicie skasować z bazy danych.
            </li>
          </ul>
        </li>
        <li className="item__main">
          <span>Dodaj nowego użytkownika</span>
          <ul>
            <li>
              1. Dodaj nowego członka zespołu bez zakładania konta - dla osób,
              które nie będą dodawać nowych ofert na stronę.
            </li>
            <li>
              2. WAŻNE - nie ma możliwości edytowania danych takiego
              użytkownika. Jeśli zaistnieje konieczność wprowadzenia zmian,
              należy usunąć ze strony poprzedniego użytkownika i dodać nowego.
            </li>
          </ul>
        </li>
        <li className="item__main">
          <span>Konto</span>
          <ul>
            <li>1. W tej zakładce możesz edytować swoje dane.</li>
            <li>2. Każda edycja wymaga potwierdzenia hasłem</li>
            <li>
              3. Jeśli nie pamiętasz hasła, wyloguj się, wejdź na stronę
              logowania i zresetuj hasło
            </li>
          </ul>
        </li>
        <li className="item__main">
          <span>Strona główna</span>
          <ul>
            <li>1. Przejście na stronę główną bez wylogowania</li>
          </ul>
        </li>
      </ul>
    </GuideDiv>
  );
}

export default Guide;
