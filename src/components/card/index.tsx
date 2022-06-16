/* eslint-disable react/jsx-filename-extension */
import React, { FC } from 'react';

import Chip from '../chip';

import CardStyles from './styles';

function Card({
  name,
  type,
  phone,
  street,
  city,
  state,
  country,
  zipcode,
}:{
  name:string,
  type:string,
  phone:string,
  street:string,
  city:string,
  state:string,
  country:string,
  zipcode:string,
}) {
  return (
    <CardStyles>
      <h2>{name}</h2>
      <p>
        {street}
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
      <div className="chip-container">
        <Chip
          key={`${name}-type`}
          text={type}
          editable={false}
          icon=""
        />
        <Chip
          key={`${name}-zipcode`}
          text={zipcode}
          editable={false}
          icon=""
        />
        <Chip
          key={`${name}-phone`}
          text={phone}
          editable={false}
          icon=""
        />
        <Chip
          key={`${name}-add-more`}
          text="add more"
          editable
          icon=""
        />
      </div>
    </CardStyles>
  );
}

export default Card;
