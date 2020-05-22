import React from 'react';
import { useSelector } from 'react-redux';
import PropertySmallSingleCard from './PropertySmallSingleCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../../colors';
import { useFirestoreConnect } from 'react-redux-firebase';
import { mediaQueries } from '../../../mixins';
import Spinner from '../../adminPanel/spinner/Spinner';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    width: 100%;
    max-width: 35rem;
    margin: 0 auto;

    @media ${mediaQueries('tab-port')} {
      max-width: 50%;
    }

    & > div {
      width: 100%;
    }
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  & a div {
    background-color: rgba(${colors.primary5}, 1);
    font-size: 1.2rem;

    &:hover {
      background-color: rgba(${colors.primary4}, 1);
    }
  }
`;

function PropertySmallCards(props) {
  useFirestoreConnect([
    {
      collection: 'properties',
      orderBy: ['addedDate', 'desc'],
    },
  ]);
  const properties = useSelector((state) => state.firestore.ordered.properties);
  const propertiesFiltered =
    properties && properties.filter((el) => el.status === 'added');

  return (
    <div className="property-small-cards container">
      <Div>
        {properties ? (
          props.limit ? (
            properties &&
            propertiesFiltered
              .slice(0, 4)
              .map((property, i) => (
                <PropertySmallSingleCard
                  key={i}
                  title={property.propertyName}
                  description={property.propertyDescription}
                  purpose={property.purpose}
                  market={property.market}
                  price={property.price}
                  metrage={property.metrage}
                  img={property.mainImgUrl}
                  id={property.id}
                  imgUrlArr={property.imgUrlArr}
                  type={property.type}
                  rooms={property.rooms}
                  propertyPlanUrl={property.propertyPlanUrl}
                  floor={property.floor}
                  numbOfFloors={property.numbOfFloors}
                  elevator={property.elevator}
                  kitchen={property.kitchen}
                  standard={property.standard}
                  stan={property.stan}
                  balcony={property.balcony}
                  garage={property.garage}
                  year={property.year}
                  technology={property.technology}
                  extra={property.extra}
                  realEstateBroker={property.realEstateBroker}
                  newFiltered={property.newFiltered}
                  banner={property.banner}
                />
              ))
          ) : (
            properties &&
            propertiesFiltered.map((property, i) => (
              <PropertySmallSingleCard
                key={i}
                title={property.propertyName}
                description={property.propertyDescription}
                purpose={property.purpose}
                market={property.market}
                price={property.price}
                metrage={property.metrage}
                img={property.mainImgUrl}
                id={property.propertyId}
                imgUrlArr={property.imgUrlArr}
                type={property.type}
                rooms={property.rooms}
                propertyPlanUrl={property.propertyPlanUrl}
                floor={property.floor}
                numbOfFloors={property.numbOfFloors}
                elevator={property.elevator}
                kitchen={property.kitchen}
                standard={property.standard}
                stan={property.stan}
                balcony={property.balcony}
                garage={property.garage}
                year={property.year}
                technology={property.technology}
                extra={property.extra}
                realEstateBroker={property.realEstateBroker}
                newFiltered={property.newFiltered}
                banner={property.banner}
              />
            ))
          )
        ) : (
          <Spinner />
        )}
      </Div>
      <Button>
        <Link to="/nieruchomosci">
          {props.button ? <div className="btn">Zobacz wszystkie</div> : null}
        </Link>
      </Button>
    </div>
  );
}

export default PropertySmallCards;
