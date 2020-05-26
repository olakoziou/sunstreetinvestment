import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useEffect } from 'react';

const NotFoundDiv = styled.div`
  height: calc(100vh + 5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-display: swap;
  text-align: center;
  padding: 0 2rem;
`;

function NotFound() {
  const history = useHistory();
  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/');
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NotFoundDiv className="not-found">
      <span>
        Ups... Strona nie istnieje. Za chwilę zostaniesz przekierowany na stronę
        główną
      </span>
    </NotFoundDiv>
  );
}

export default NotFound;
