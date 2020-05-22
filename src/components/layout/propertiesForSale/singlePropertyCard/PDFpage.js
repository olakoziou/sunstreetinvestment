import React from 'react';
import jsPDF from 'jspdf';
import ReactToPdf from 'react-to-pdf';
import styled from 'styled-components';

const PdfPage = styled.div`
  margin-top: 5rem;

  & .pdf-container {
    width: 70%;
    margin: 0 auto;
    & .image {
      width: 100%;
      height: 20rem;
      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

function PDFpage(props) {
  const data = props.location.state;
  const imgUrl = data && data.img;
  const ref = React.createRef();
  const doc = new jsPDF();
  return (
    <PdfPage className="propert-card__pdf">
      <ReactToPdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </ReactToPdf>
      <div ref={ref}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sunstreet-dashboard.appspot.com/o/images%2FDom%20jednorodzinny%2030km%20od%20Krakowa%2Fmainimage?alt=media&token=b550cb5e-30ef-4b21-9bb0-d7deec247977"
          className={''}
          alt=""
        />
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </PdfPage>
  );
}

export default PDFpage;
