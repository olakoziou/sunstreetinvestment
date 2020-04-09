import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, useFirebase } from 'react-redux-firebase';

function NewProperty(props) {
  const { data } = props;
  useFirestoreConnect('users');
  useEffect(() => {
    M.AutoInit();
    // var elems = document.querySelectorAll('select');
    // var instances = M.FormSelect.init(elems);
  }, []);

  const handleRemoveImg = (e) => {
    const currentImgUrl = e.target.parentElement.style.backgroundImage
      .slice(4, -1)
      .replace(/"/g, '');

    const filteredImageArr = props.state.imgUrlArr.filter(
      (x) => x !== currentImgUrl
    );

    props.setState({ ...props.state, imgUrlArr: filteredImageArr });
  };

  const handleImgChange = (e) => {
    const files = [];
    const upload = Array.from(e.target.files);
    upload.map((img) => files.push(img));
    props.setImgState({ ...props.imgState, [e.target.id]: files });
  };

  const realEastateBroker = useSelector(
    (state) => state.firestore.ordered.users
  );
  const names = [];
  realEastateBroker &&
    realEastateBroker.map((el) =>
      names.push([el.firstName, el.lastName].join(' '))
    );

  return (
    <>
      <div className="row">
        <div className="input-field col s12">
          <select
            onChange={props.handleSelected}
            id="purpose"
            defaultValue={data ? data.purpose : 'Default'}
          >
            <option value="Default" disabled>
              Cel
            </option>
            <option value="Sprzedaż">Sprzedaż</option>
            <option value="Wynajem">Wynajem</option>
          </select>
          <label>Wybierz</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <select
            onChange={props.handleSelected}
            id="market"
            defaultValue={data ? data.market : 'Default'}
          >
            <option value="Default" disabled>
              Rynek
            </option>
            <option value="Pierwotny">Pierwotny</option>
            <option value="Wtórny">Wtórny</option>
          </select>
          <label>Wybierz</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <select
            onChange={props.handleSelected}
            id="type"
            defaultValue={data ? data.type : 'Default'}
          >
            <option value="Default" disabled>
              Typ nieruchomości
            </option>
            <option value="Dom">Dom</option>
            <option value="Mieszkanie">Mieszkanie</option>
            <option value="Działka">Działka</option>
            <option value="Kamienica">Kamienica</option>
            <option value="Lokal użytkowy">Lokal użytkowy</option>
            <option value="Garaż">Garaż</option>
            <option value="Magazyn">Magazyn</option>
          </select>
          <label>Wybierz</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="price"
            type="number"
            className="validate"
            onChange={props.handleChange}
            defaultValue={data ? data.price : 'Default'}
          />
          <label className="active" htmlFor="price">
            Cena
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="metrage"
            type="number"
            className="validate"
            onChange={props.handleChange}
            defaultValue={data ? data.metrage : 'Default'}
          />
          <label className="active" htmlFor="metrage">
            Metraż
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="rooms"
            type="number"
            className="validate"
            onChange={props.handleChange}
            defaultValue={data ? data.rooms : 'Default'}
          />
          <label className="active" htmlFor="rooms">
            Ilość pokoi
          </label>
        </div>
      </div>
      <div className="row">
        <div className="file-field input-field">
          <div className="btn file">
            <span>{props.data ? null : '*'}Zdjęcie główne</span>
            <input
              type="file"
              onChange={handleImgChange}
              id="mainImg"
              disabled={!props.state.propertyName ? true : false}
              required={props.data ? false : true}
            />
          </div>
          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="file-field input-field">
          <div className="btn file">
            <span>Pozostałe zdjęcia</span>
            <input
              type="file"
              onChange={handleImgChange}
              multiple
              id="images"
              disabled={!props.state.propertyName ? true : false}
            />
          </div>
          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="file-field input-field">
          <div className="btn file">
            <span>Plan</span>
            <input
              type="file"
              onChange={handleImgChange}
              id="plan"
              disabled={!props.state.propertyName ? true : false}
            />
          </div>
          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="floor"
            type="number"
            className="validate"
            onChange={props.handleChange}
            defaultValue={data ? data.floor : 'Default'}
          />
          <label className="active" htmlFor="floor">
            Piętro
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="numbOfFloors"
            type="number"
            className="validate"
            onChange={props.handleChange}
            defaultValue={data ? data.numbOfFloors : 'Default'}
          />
          <label className="active" htmlFor="numbOfFloors">
            Ilość pięter
          </label>
        </div>
      </div>
      <div className="row checkbox">
        <p>
          <label htmlFor="elevator">
            <input
              type="checkbox"
              className="filled-in"
              id="elevator"
              onChange={props.handleChecked}
              defaultChecked={data ? true : false}
            />
            <span>Winda</span>
          </label>
        </p>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <select
            onChange={props.handleSelected}
            id="kitchen"
            defaultValue={data ? data.kitchen : 'Default'}
          >
            <option value="Default" disabled>
              Kuchnia
            </option>
            <option value="Kuchnia zamykana z oknem">
              Kuchnia zamykana z oknem
            </option>
            <option value="Kuchnia otwarta z oknem">
              Kuchnia otwarta z oknem
            </option>
            <option value="Aneks kuchenny">Aneks kuchenny</option>
            <option value="Kuchnia z jadalnią">Kuchnia z jadalnią</option>
            <option value="Kuchnia otwarta bez okna">
              Kuchnia otwarta bez okna
            </option>
            <option value="Kuchnia zamykana bez okna">
              Kuchnia zamykana bez okna
            </option>
            <option value="Kuchnia w przejściu">Kuchnia w przejściu</option>
          </select>
          <label>Wybierz</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <select
            onChange={props.handleSelected}
            id="standard"
            defaultValue={data ? data.standard : 'Default'}
          >
            <option value="Default" disabled>
              Standard
            </option>
            <option value="Wysoki">Wysoki</option>
            <option value="Normalny">Normalny</option>
            <option value="Do remontu">Do remontu</option>
            <option value="Surowe">Surowe</option>
            <option value="Po remoncie">Po remoncie</option>
            <option value="Do odnowienia">Do odnowienia</option>
            <option value="Deweloperski">Deweloperski</option>
            <option value="W budowie">W budowie</option>
          </select>
          <label>Wybierz</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <select
            multiple
            onChange={props.handleSelectedMultiple}
            id="balcony"
            defaultValue={data ? data.balcony : []}
          >
            <option value="Default" disabled>
              Brak
            </option>
            <option value="Balkon">Balkon</option>
            <option value="Taras">Taras</option>
            <option value="Ogród">Ogród</option>
            <option value="Loggia">Loggia</option>
            <option value="Taras na dachu">Taras na dachu</option>
          </select>
          <label>Balkon</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <select
            multiple
            onChange={props.handleSelectedMultiple}
            id="garage"
            defaultValue={data ? data.garage : []}
          >
            <option value="Default" disabled>
              Brak
            </option>
            <option value="Garaż">Garaż</option>
            <option value="Przy ulicy poza strefą">
              Przy ulicy poza strefą
            </option>
            <option value="Miejsce parkingowe w garażu podziemnym">
              Miejsce parkingowe w garażu podziemnym
            </option>
            <option value="Miejsce parkingowe naziemne">
              Miejsce parkingowe naziemne
            </option>
            <option value="Przy ulicy w strefie">Przy ulicy w strefie</option>
          </select>
          <label>Garaż</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="year"
            type="number"
            className="validate"
            onChange={props.handleChange}
            defaultValue={data ? data.year : 'Default'}
          />
          <label className="active" htmlFor="year">
            Rok budowy
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <select
            onChange={props.handleSelected}
            id="technology"
            defaultValue={data ? data.technology : 'Default'}
          >
            <option value="Default" disabled>
              Brak
            </option>
            <option value="Mieszana">Mieszana</option>
            <option value="Wielka płyta">Wielka płyta</option>
            <option value="Cegła przedwojenna">Cegła przedwojenna</option>
            <option value="Pustak ceramiczny">Pustak ceramiczny</option>
            <option value="Silikat">Silikat</option>
            <option value="Szkieletowa">Szkieletowa</option>
            <option value="Rama H">Rama H</option>
            <option value="Pustak">Pustak</option>
            <option value="Ytong">Ytong</option>
            <option value="Drewniana">Drewniana</option>
          </select>
          <label>Technologia budowy</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <select
            multiple
            onChange={props.handleSelectedMultiple}
            id="extra"
            defaultValue={data ? data.extra : []}
          >
            <option value="Default" disabled>
              Brak
            </option>
            <option value="Pod inwestycję">Pod inwestycję</option>
            <option value="Pilna sprzedaż">Pilna sprzedaż</option>
            <option value="Tylko u nas">Tylko u nas</option>
            <option value="Loggia">Loggia</option>
            <option value="Obniżona cena">Obniżona cena</option>
          </select>
          <label>Dodatkowe informacje</label>
        </div>
      </div>
      <div className="row checkbox realEstateBroker">
        {names &&
          names.map((name, i) => (
            <p key={i}>
              <label>
                <input
                  name="group1"
                  id={`realEstateBroke-${i}`}
                  type="radio"
                  onChange={props.handleChecked}
                  required
                />
                <span>{name}</span>
              </label>
            </p>
          ))}
      </div>
      {props.state.mainImgUrl ||
      props.state.imgUrlArr ||
      props.state.propertyPlanUrl ? (
        <div className="images">
          {props.state.mainImgUrl ? (
            <div className="mainImg">
              <span>Zdjęcie główne</span>
              <div
                className="img"
                style={{ backgroundImage: `url(${props.state.mainImgUrl})` }}
              ></div>
            </div>
          ) : null}
          {props.state.imgUrlArr ? (
            <div className="other-images">
              <span>Pozostałe zdjęcia</span>
              {props.state.imgUrlArr.map((img, i) => (
                <div
                  className="img"
                  key={i}
                  style={{ backgroundImage: `url(${img})` }}
                >
                  <i className="material-icons" onClick={handleRemoveImg}>
                    close
                  </i>
                </div>
              ))}
            </div>
          ) : null}
          {props.state.propertyPlanUrl ? (
            <div className="plan">
              <span>Plan nieruchomości</span>
              <div
                className="img"
                style={{
                  backgroundImage: `url(${props.state.propertyPlanUrl})`,
                }}
              ></div>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default NewProperty;
