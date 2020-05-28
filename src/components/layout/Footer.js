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
    padding: 0 2rem;
    max-width: 90%;
    margin: 0 auto;

    @media ${mediaQueries('phone')} {
      padding: 0 5rem;
      max-width: 80%;
    }

    @media ${mediaQueries('tab-port')} {
      padding: 0;
    }

    & > div {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 1rem;

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
        font-size: 0.9rem;
        display: block;
        margin: 0.5rem auto;
      }
    }
  }

  & .footer__details {
    justify-content: center;

    & > div {
      margin-bottom: 1.2rem;
      padding: 0 1rem;

      @media ${mediaQueries('tab-port')} {
        width: 25%;
      }
    }
    & h5 {
      font-size: 1.6rem;
      margin-bottom: 0.6rem;
    }

    & span {
      font-size: 1.2rem;
    }

    & .contact > div {
      display: flex;
      align-items: center;
      justify-content: center;

      & i {
        margin: 0.2rem;
        font-size: 1.2rem;
        color: rgba(${colors.extra});
      }
    }
  }
`;

function Footer() {
  return (
    <FooterStyle>
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
            <span>
              SunStreet Investment Sp. z o.o. <br />{' '}
            </span>

            <span>
              Masarska 13/B4, 31-534 Kraków <br />{' '}
            </span>
            <span>
              NIP: 678-316-33-06 <br />{' '}
            </span>
            <span>
              REGON: 363877510 <br />{' '}
            </span>
          </div>
          <div className="address">
            <h5>Siedziba firmy</h5>
            <span>
              ul. Generała Józefa Sowińskiego, 2/5 31-524 Kraków <br />{' '}
            </span>
            <span>
              Kapitał Zakładowy 18 000,00 zł Sąd Rejonowy w Krakowie, XI Wydział
              Gospodarczy KRS 0000643359
            </span>
          </div>
        </div>
        <div className="footer_copyright">
          <span>&copy; Aleksandra Kozioł</span>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
