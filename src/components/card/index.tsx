import React, { ReactElement } from 'react';

import Chip from '../chip';

import CardStyles from './styles';

import GraphIcon from '../../assets/img/icons/Graph.svg';
import LocationIcon from '../../assets/img/icons/Location.svg';
import PhoneIcon from '../../assets/img/icons/Phone.svg';
import AddIcon from '../../assets/img/icons/Add.svg';

function Card({
  name,
  type,
  phone,
  street,
  city,
  state,
  country,
  zipcode,
  handleDelete,
  id,
}:{
  id:string,
  name:string,
  type:string,
  phone:string,
  street:string,
  city:string,
  state:string,
  country:string,
  zipcode:string,
  handleDelete:Function,
}):ReactElement {
  return (
    <CardStyles>
      <div className="card-header">
        <h3>{name}</h3>
        <button
          type="button"
          className="card-header_delete-button"
          onClick={() => handleDelete(id)}
        />
      </div>
      <p>
        {street || ''}
      </p>
      <p>
        {city}
        ,
        {' '}
        {state}
        {' '}
        -
        {' '}
        {country}
      </p>
      <div className="card-body_chip-container">
        {
          type ? (
            <Chip
              key={`${name}-type`}
              text={type}
              editable={false}
              icon={GraphIcon}
            />
          ) : ''
        }
        {
          zipcode ? (
            <Chip
              key={`${name}-zipcode`}
              text={zipcode}
              editable={false}
              icon={LocationIcon}
            />
          ) : ''
        }
        {
          phone ? (
            <Chip
              key={`${name}-phone`}
              text={phone}
              editable={false}
              icon={PhoneIcon}
            />
          ) : ''
        }
        <Chip
          key={`${name}-add-more`}
          text="add more"
          editable
          icon={AddIcon}
        />
      </div>
    </CardStyles>
  );
}

export default Card;
