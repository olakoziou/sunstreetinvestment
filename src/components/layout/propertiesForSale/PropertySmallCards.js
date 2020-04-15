import React from 'react';
import { useSelector } from 'react-redux';
import PropertySmallSingleCard from './PropertySmallSingleCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../../colors';
import { useFirestoreConnect } from 'react-redux-firebase';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    max-width: 100%;

    @media only screen and (min-width: 600px) {
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

  console.log(properties);

  return (
    <div className="property-small-cards container">
      <Div>
        {props.limit
          ? properties &&
            properties
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
                />
              ))
          : properties &&
            properties.map((property, i) => (
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
              />
            ))}
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
