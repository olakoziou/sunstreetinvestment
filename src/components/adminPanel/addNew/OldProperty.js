import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';

function OldProperty(props) {
  const { data } = props;
  useEffect(() => {
    // var elems = document.querySelectorAll('select');
    // var instances = M.FormSelect.init(elems);
    M.AutoInit();
  }, []);
  return (
    <>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="buyPrice"
            type="number"
            className="validate"
            onChange={props.handleChange}
            defaultValue={data ? data.buyPrice : ''}
            required
          />
          <label className="active" htmlFor="buyPrice">
            *Cena zakupu
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="sellPrice"
            type="number"
            className="validate"
            onChange={props.handleChange}
            defaultValue={data ? data.sellPrice : ''}
            required
          />
          <label className="active" htmlFor="sellPrice">
            *Cena sprzedaży
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="renovation"
            type="number"
            className="validate"
            onChange={props.handleChange}
            defaultValue={data ? data.renovation : ''}
          />
          <label className="active" htmlFor="renovation">
            Remont
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="comissions"
            type="number"
            className="validate"
            onChange={props.handleChange}
            defaultValue={data ? data.comissions : ''}
          />
          <label className="active" htmlFor="comissions">
            Prowizje
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="notary"
            type="number"
            className="validate"
            onChange={props.handleChange}
            defaultValue={data ? data.notary : ''}
          />
          <label className="active" htmlFor="notary">
            Notariusz
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="mthCost"
            type="number"
            className="validate"
            onChange={props.handleChange}
            defaultValue={data ? data.mthCost : ''}
          />
          <label className="active" htmlFor="mthCost">
            Koszty miesięczne
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="otherCosts"
            type="number"
            className="validate"
            onChange={props.handleChange}
            defaultValue={data ? data.otherCosts : ''}
          />
          <label className="active" htmlFor="otherCosts">
            Dodatkowe koszty
          </label>
        </div>
      </div>
    </>
  );
}

export default OldProperty;
