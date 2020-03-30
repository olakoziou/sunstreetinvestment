import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import { mediaQueries } from '../../mixins';

const FooterStyle = styled.footer`
  background-color: rgba(${colors.primary}, 1);
  color: #fff;
  text-align: center;
  padding: 1rem 0;

  & .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5rem;

    @media ${mediaQueries('tab-port')} {
      padding: 0;
    }

    & > div {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 0.5rem;

      @media ${mediaQueries('tab-port')} {
        flex-direction: row;
        padding: 0;
        & > div {
          margin: 1rem;
        }
      }
    }

    & .footer_copyright {
      & span {
        font-size: 0.6rem;
        display: block;
        margin: 0.5rem auto;
      }
    }
  }

  & h5 {
    font-size: 1.4rem;
  }

  & span {
    font-size: 1rem;
  }

  & .contact > div {
    display: flex;
    align-items: center;
    justify-content: center;

    & i {
      margin: 0.2rem;
      font-size: 1.2rem;
    }
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
          <div className="footer__details">
            <div className="coworking">
              <h5>Współpraca</h5>
              <span>
                Jeśli jesteś pośrednikiem, prowadzisz firmę remontową lub
                zajmujesz się aranżacją wnętrz, skonktakuj się z nami!
              </span>
            </div>
            <div className="contact">
              <h5>Kontakt</h5>
              <div>
                <i className="material-icons small">local_phone</i>
                <span>730173031</span>
              </div>
              <div>
                <i className="material-icons small">mail_outline</i>
                <span>biuro@sunstreetinvestment.pl</span>
              </div>
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
          <div className="footer_copyright">
            <span>&copy; Aleksandra Kozioł</span>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
