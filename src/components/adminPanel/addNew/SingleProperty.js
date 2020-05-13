import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  addOnWeb,
  deleteProperty,
  setBackProperty,
  hardDelete,
} from '../../../store/actions/propertiesActions';
import {
  addOnWebOldCase,
  deleteOldCase,
  setBackOldCase,
  hardDeleteOldCase,
} from '../../../store/actions/oldCasesActions';
import moment from 'moment';
import 'moment/locale/pl';
import { useHistory } from 'react-router';
import { mediaQueries } from '../../../mixins';

const Item = styled.li`
  display: flex;
  flex-direction: column;

  @media ${mediaQueries('tab-port')} {
    flex-direction: row;
  }

  &.collection-item.avatar {
    display: flex;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    & .img {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      width: 50%;
      height: 10rem;
      margin: 1rem 0.5rem;

      @media ${mediaQueries('tab-port')} {
        width: 15%;
        height: 5rem;
      }
    }

    & .content {
      width: 80%;
      & ul {
        display: flex;
        flex-wrap: wrap;
        padding: 1rem 0;

        & li {
          padding: 0.5rem 1rem;
          width: 50%;
        }

        & li:last-of-type {
          font-weight: 600;
        }
      }

      & .create-infos {
        & span {
          display: block;
        }
      }
    }

    & .buttons {
      display: flex;
      flex-direction: row;

      @media ${mediaQueries('tab-port')} {
        flex-direction: column;
      }

      & .btn {
        margin: 0.5rem 1rem;
      }
    }
  }
`;

function SingleProperty(props) {
  const { data } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    if (props.pathname.indexOf('admin-panel/added-properties') !== -1) {
      dispatch(addOnWeb(data));
    } else if (props.pathname.indexOf('admin-panel/archives') !== -1) {
      dispatch(addOnWebOldCase(data));
    }
  };

  const handleDelete = (e) => {
    if (props.pathname.indexOf('admin-panel/added-properties') !== -1) {
      dispatch(deleteProperty(data));
    } else if (props.pathname.indexOf('admin-panel/archives') !== -1) {
      dispatch(deleteOldCase(data));
    }
  };

  const handleSetBack = (e) => {
    const parentDiv =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    console.log(parentDiv.classList.value);
    if (parentDiv.classList.value.indexOf('new') !== -1) {
      dispatch(setBackProperty(data));
    } else if (parentDiv.classList.value.indexOf('old') !== -1) {
      dispatch(setBackOldCase(data));
    }
  };

  const handleEdit = (e) => {
    history.push({ pathname: '/admin-panel/edit-property', state: data });
  };

  const handleDeleteHard = (e) => {
    const parentDiv =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    console.log(data);
    if (parentDiv.classList.value.indexOf('new') !== -1) {
      dispatch(hardDelete(data));
    } else if (parentDiv.classList.value.indexOf('old') !== -1) {
      dispatch(hardDeleteOldCase(data));
    }
  };

  return (
    <Item className="collection-item avatar">
      {props.image && (
        <div
          className="img"
          style={{ backgroundImage: `url(${data.mainImgUrl})` }}
        ></div>
      )}
      <div className="content">
        <span className="title">{data.propertyName}</span>
        <p>
          {data.propertyDescription
            ? `${data.propertyDescription.slice(0, 100)}...`
            : null}
        </p>
        {!props.archives ? (
          props.allData ? (
            <>
              <ul>
                {data.purpose && <li>Cel: {data.purpose}</li>}
                {data.market && <li>Rynek: {data.market}</li>}
                {data.type && <li>Typ: {data.type}</li>}
                {data.price && <li>Cena: {data.price} zł</li>}
                {data.floor && <li>Piętro: {data.floor}</li>}
                {data.numbOfFloors && (
                  <li>Ilość pieter: {data.numbOfFloors}</li>
                )}
                {data.elevator && <li>Winda: {data.elevator}</li>}
                {data.kitchen && <li>Kuchnia: {data.kitchen}</li>}
                {data.standard && <li>Standard: {data.standard}</li>}
                {data.balcony && (
                  <li>Balkon: {data.balcony.map((el) => el + ' ')}</li>
                )}
                {data.year && <li>Rok budowy: {data.year}</li>}
                {data.technology && <li>Technologia: {data.technology}</li>}
                {data.extra && (
                  <li>
                    Dodatkowe informacje: {data.extra.map((el) => el + ' ')}
                  </li>
                )}
                {data.stan && <li>Stan: {data.stan}</li>}
                {data.status && <li>Status: {data.status}</li>}
              </ul>
              <div className="create-infos">
                {data.addedBy && <span>Dodane przez: {data.addedBy}</span>}
                {data.realEstateBroker && (
                  <span>Opiekun oferty: {data.realEstateBroker}</span>
                )}
                {data.addedDate && (
                  <span>
                    Data dodania:{' '}
                    {moment(new Date(data.addedDate.toDate())).format('LLLL')}
                  </span>
                )}
              </div>
            </>
          ) : (
            <ul>
              {data.deleteDate && (
                <li>
                  Usunięto: {moment(data.deleteDate.toDate()).format('LLLL')}
                </li>
              )}
              {data.deletedBy && <li>Przez: {data.deletedBy}</li>}
            </ul>
          )
        ) : props.allData ? (
          <ul>
            {data.buyPrice && <li>Zakup: {data.buyPrice} zł</li>}
            {data.sellPrice && <li>Sprzedaż: {data.sellPrice} zł</li>}
            {data.notary && <li>Notariusz: {data.notary} zł</li>}
            {data.renovation && <li>Remont: {data.renovation} zł</li>}
            {data.comissions && <li>Prowizje: {data.comissions} zł</li>}
            {data.mthCosts && <li>Koszty miesięczne: {data.mthCosts} zł</li>}
            {data.otherCosts && <li>Pozostałe koszty: {data.otherCosts} zł</li>}
            {data.status && <li>Status: {data.status} </li>}
          </ul>
        ) : (
          <ul>
            {data.deleteDate && (
              <li>
                Usunięto: {moment(data.deleteDate.toDate()).format('LLLL')}
              </li>
            )}
            {data.deletedBy && <li>Przez: {data.deletedBy}</li>}
          </ul>
        )}
      </div>
      <div className="buttons">
        {props.allBtns ? (
          <>
            <div
              className="btn"
              onClick={handleAdd}
              disabled={data.status === 'added' ? true : false}
            >
              Dodaj
            </div>
            <div className="btn blue" onClick={handleEdit}>
              Edytuj
            </div>
            <div className="btn red" onClick={handleDelete}>
              Usuń
            </div>
          </>
        ) : (
          <>
            <div className="btn blue" onClick={handleSetBack}>
              Przywróć
            </div>
            <div className="btn red" onClick={handleDeleteHard}>
              Usuń
            </div>
          </>
        )}
      </div>
    </Item>
  );
}

export default SingleProperty;
