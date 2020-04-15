import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { boxShadows } from '../../../mixins';
import { colors } from '../../../colors';

const Card = styled.div`
  width: 90%;
  margin: 0 auto;
  & .card {
    ${boxShadows('xsmall')};

    & .card-image {
      height: 25rem;
      & img {
        height: 100%;
      }
    }
  }
  & .card .card-image span.card-title {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
    border-right: 2px solid rgba(${colors.extra}, 0.85);
    font-size: 1.6rem;
    padding: 0.6rem 1.2rem;
    bottom: 5%;
    ${boxShadows('small')};
  }

  & .card .card-content {
    font-size: 1.1rem;
    color: rgba(${colors.secondary2}, 1);
    border-bottom: 1px solid rgba(${colors.secondary4}, 1);
  }

  & .card .card-details ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & li {
      padding: 0.5rem;
      margin: 0.5rem;
      ${boxShadows('xsmall')};
      color: rgba(${colors.primary3}, 1);
    }
  }
`;

function PropertySmallSingleCard(props) {
  const {
    title,
    description,
    purpose,
    market,
    price,
    metrage,
    img,
    id,
    imgUrlArr,
    type,
    rooms,
    propertyPlanUrl,
    floor,
    numbOfFloors,
    elevator,
    kitchen,
    standard,
    stan,
    balcony,
    garage,
    year,
    technology,
    extra,
  } = props;

  console.log(props);

  const urlTitle = title
    .split(' ')
    .join('')
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, '');

  return (
    <div className="row property-small-card">
      <div className="col s12">
        <Link
          to={{
            pathname: '/nieruchomosc/' + urlTitle + '/' + id,
            state: {
              title,
              description,
              purpose,
              market,
              price,
              metrage,
              img,
              id,
              imgUrlArr,
              type,
              rooms,
              propertyPlanUrl,
              floor,
              numbOfFloors,
              elevator,
              kitchen,
              standard,
              stan,
              balcony,
              garage,
              year,
              technology,
              extra,
            },
          }}
        >
          <Card>
            <div className="card">
              <div className="card-image">
                <img src={img} />
                <span className="card-title">{title}</span>
              </div>
              <div className="card-content">
                <p>{description.slice(0, 100)}...</p>
              </div>
              <div className="card-details">
                <ul>
                  {purpose && <li>{purpose}</li>}
                  {market && <li>{market}</li>}
                  {price && <li>{price} zł</li>}
                  {metrage && <li>{metrage} m2</li>}
                  {price && metrage && (
                    <li>{(price / metrage).toFixed(2)} zł/m2</li>
                  )}
                </ul>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default PropertySmallSingleCard;
