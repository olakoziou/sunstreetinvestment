import React from 'react';
import styled from 'styled-components';
import banner from '../../../img/banner.jpg';
import { boxShadows, mediaQueries } from '../../../mixins';
import { colors } from '../../../colors';

const ContactSection = styled.section`
  background-image: url(${banner});
  background-position: center;
  background-size: cover;
  padding: 5rem 0 10rem;
  & .contact__banner {
    & h2 {
      margin: 5rem 0;
      text-align: center;
    }
  }

  & .contact__details {
    ${boxShadows('medium')};
    width: 90%;

    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.85);
    padding: 2rem;
    border-radius: 4px;

    @media ${mediaQueries('phone')} {
      width: 75%;
      max-width: 45rem;
    }

    /* label color */
    & .input-field label {
      color: rgba(${colors.primary5});
    }
    /* label focus color */
    & .input-field input:focus + label,
    .input-field textarea:focus + label {
      color: rgba(${colors.primary5});
    }
    /* label underline focus color */
    & .input-field input:focus,
    .input-field textarea:focus {
      border-bottom: 1px solid rgba(${colors.primary5});
      box-shadow: 0 1px 0 0 rgba(${colors.primary5});
    }
    /* valid color */
    & .input-field input.valid,
    .input-field textarea.valid {
      border-bottom: 1px solid rgba(${colors.primary5});
      box-shadow: 0 1px 0 0 rgba(${colors.primary5});
    }
    /* invalid color */
    & .input-field input.invalid,
    .input-field textarea.invalid {
      border-bottom: 1px solid red;
      box-shadow: 0 1px 0 0 red;
    }
    /* icon prefix focus color */
    & .input-field .prefix.active {
      color: rgba(${colors.primary5});
    }

    & .send {
      background-color: rgba(${colors.primary4});

      &:hover {
        background-color: rgba(${colors.primary5});
      }
    }
  }
`;

function Contact() {
  return (
    <ContactSection className="contact">
      <div className="contact__banner ">
        <h2>Kontakt</h2>
      </div>
      <div className="contact__details">
        <div className="contact__details-form">
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <input id="first_name" type="text" class="validate" />
                  <label for="first_name">Imię</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="last_name" type="text" class="validate" />
                  <label for="last_name">Nazwisko</label>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <input id="email" type="email" class="validate" />
                  <label for="email">Email</label>
                </div>
              </div>
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <textarea
                        id="textarea1"
                        class="materialize-textarea"
                      ></textarea>
                      <label for="textarea1">Wiadomość</label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="btn send">Wyślij</div>
            </form>
          </div>
        </div>
      </div>
    </ContactSection>
  );
}

export default Contact;
