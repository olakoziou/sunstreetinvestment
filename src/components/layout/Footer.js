import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  background-color: rgba(32, 64, 81, 1);
  color: #fff;
  text-align: center;

  & .footer {
    display: flex;

    & > div {
      display: flex;
      flex-direction: column;
      width: 25%;
    }
  }

  & h5 {
    font-size: 16px;
  }

  & span {
    font-size: 12px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
`;

function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer">
          <div className="coworking">
            <h5>Współpraca</h5>
            <span>
              Jeśli jesteś pośrednikiem, prowadzisz firmę remontową lub
              zajmujesz się aranżacją wnętrz, skonktakuj się z nami!
            </span>
          </div>
          <div className="contact">
            <h5>Kontakt</h5>
            <span>
              <i className="material-icons">local_phone</i>730173031
            </span>
            <span>
              <i className="material-icons">mail_outline</i>
              biuro@sunstreetinvestment.pl
            </span>
          </div>
          <div className="company-info">
            <h5>Dane spółki</h5>
            <span>SunStreet Investment Sp. z o.o.</span>
            <span>Masarska 13/b4, 31-534 Kraków</span>
            <span>NIP: 6751705313</span>
            <span>REGON: 383486649</span>
          </div>
          <div className="address">
            <h5>Siedziba firmy</h5>
            <span>ul. Generała Józefa Sowińskiego, 2/5 31-524 Kraków</span>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
