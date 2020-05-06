import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../../../mixins';
import { useState } from 'react';
import NewProperty from './NewProperty';
import OldProperty from './OldProperty';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';
import { useFirebase, useFirebaseConnect } from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';
import {
  addNewProperty,
  editProperty,
} from '../../../store/actions/propertiesActions';
import { colors } from '../../../colors';
import {
  addOldProperty,
  editkOldCase,
} from '../../../store/actions/oldCasesActions';
import { useHistory } from 'react-router';

const FormBoxDiv = styled.div`
  & .form-wrapper {
    display: flex;
    flex-wrap: wrap;

    & .row {
      width: 100%;
      min-width: 20rem;
      margin: 0.25rem;

      @media ${mediaQueries('tab-port')} {
        width: 45%;
      }
    }
    & .checkbox {
      display: flex;
      align-items: center;
      margin-left: 1rem;
    }

    & .realEstateBroker {
      width: 100%;
      flex-wrap: wrap;

      & p {
        margin: 0.5rem;
      }
    }

    & .images {
      width: 100%;

      & div {
        padding: 1rem 0;
        display: flex;
        flex-wrap: wrap;

        & span {
          width: 100%;
        }
        & .img {
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 10rem;
          height: 6rem;
          margin: 0.5rem;
          position: relative;

          & i {
            position: absolute;
            top: 1%;
            right: 1%;
            color: red;
            cursor: pointer;
          }
        }
      }
    }
  }

  & .star {
    span {
      color: rgba(${colors.secondary}, 0.5);
    }
  }

  & .submit {
    margin: 1rem 0;
  }
`;

function AddNewProperty(props) {
  const { data, location } = props;
  const [state, setState] = useState(
    data
      ? data
      : {
          ['old-case']: false,
        }
  );
  const [imgState, setImgState] = useState({});
  const firebase = useFirebase();
  const storageRef = firebase.storage().ref();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    if (e.target.id.indexOf('realEstateBroke') !== -1) {
      setState({
        ...state,
        realEstateBroker: e.target.nextElementSibling.innerHTML,
      });
    } else {
      setState({
        ['old-case']: false,
        [e.target.id]: e.target.checked,
      });
    }
  };

  const handleSelected = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSelectedMultiple = (e) => {
    const values = [...e.target.selectedOptions].map((opt) => opt.value);
    setState({ ...state, [e.target.id]: values });
  };

  // Add main image
  useEffect(() => {
    if (state.propertyName && imgState.mainImg) {
      imgState.mainImg.map((image, i) => {
        storageRef
          .child(`images/${state.propertyName}/mainimage`)
          .put(image)
          .then((url) => {
            url.ref.getDownloadURL().then((url) => {
              setState((state) => ({ ...state, mainImgUrl: url }));
            });
          });
      });
    }
  }, [imgState.mainImg]);

  // Add other images
  useEffect(() => {
    if (state.propertyName && imgState.images) {
      imgState.images.map((image, i) => {
        storageRef
          .child(`images/${state.propertyName}/${image.name}`)
          .put(image)
          .then((url) => {
            url.ref.getDownloadURL().then((url) => {
              setState((state) => ({
                ...state,
                imgUrlArr: state.imgUrlArr ? [...state.imgUrlArr, url] : [url],
              }));
            });
          });
      });
    }
  }, [imgState.images]);

  // Add property plan
  useEffect(() => {
    if (state.propertyName && imgState.plan) {
      imgState.plan.map((image, i) => {
        console.log(image);
        storageRef
          .child(`images/${state.propertyName}/plan`)
          .put(image)
          .then((url) => {
            url.ref.getDownloadURL().then((url) => {
              setState((state) => ({ ...state, propertyPlanUrl: url }));
            });
          });
      });
    }
  }, [imgState.plan]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state['old-case']) {
      if (
        props.location.pathname &&
        props.location.pathname.indexOf('/admin-panel/add-new-property' !== -1)
      ) {
        dispatch(addNewProperty(state));
        history.push('/admin-panel/added-properties');
      } else if (location.indexOf('/admin-panel/edit-property' !== -1)) {
        dispatch(editProperty(state));
        history.push('/admin-panel/added-properties');
      }
    } else if (state['old-case']) {
      if (
        props.location.pathname &&
        props.location.pathname.indexOf('/admin-panel/add-new-property' !== -1)
      ) {
        dispatch(addOldProperty(state));
        history.push('/admin-panel/archives');
      } else if (location.indexOf('/admin-panel/edit-property' !== -1)) {
        dispatch(editkOldCase(state));
        history.push('/admin-panel/archives');
      }
    }
  };

  return (
    <FormBoxDiv className="row">
      {props.location.pathname &&
      props.location.pathname.indexOf('/admin-panel/add-new-property') !==
        -1 ? (
        <h5>Dodaj nieruchomość</h5>
      ) : (
        <h5>Edytuj nieruchomość</h5>
      )}
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row checkbox">
          <p>
            <label htmlFor="old-case">
              <input
                type="checkbox"
                className="filled-in"
                id="old-case"
                onChange={handleChecked}
              />
              <span>Stara inwestycja (na stronę Archiwum)</span>
            </label>
          </p>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="propertyName"
              type="text"
              className="validate"
              onChange={handleChange}
              defaultValue={state.propertyName ? state.propertyName : ''}
              required
            />
            <label className="active" htmlFor="propertyName">
              *Nazwa
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="propertyDescription"
              type="text"
              className="validate"
              onChange={handleChange}
              defaultValue={
                state.propertyDescription ? state.propertyDescription : ''
              }
            />
            <label className="active" htmlFor="propertyDescription">
              Opis
            </label>
          </div>
        </div>
        <div className="form-wrapper">
          {!state['old-case'] ? (
            <NewProperty
              state={state}
              setState={setState}
              handleChange={handleChange}
              handleChecked={handleChecked}
              handleSelected={handleSelected}
              handleSelectedMultiple={handleSelectedMultiple}
              imgState={imgState}
              setImgState={setImgState}
              data={data}
            />
          ) : (
            <OldProperty
              state={state}
              setState={setState}
              handleChange={handleChange}
              handleChecked={handleChecked}
              handleSelected={handleSelected}
              handleSelectedMultiple={handleSelectedMultiple}
              data={data}
            />
          )}
        </div>

        <div className="star">
          <span>*Wymagane</span>
        </div>
        <div className="submit">
          <button className="btn send">Zatwierdź</button>
        </div>
      </form>
    </FormBoxDiv>
  );
}

export default AddNewProperty;
