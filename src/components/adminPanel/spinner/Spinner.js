import React from 'react';
import styled from 'styled-components';

const SpinnerDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function Spinner() {
  return (
    <SpinnerDiv className="spinner">
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </SpinnerDiv>
  );
}

export default Spinner;
