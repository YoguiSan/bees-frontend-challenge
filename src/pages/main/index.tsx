/* eslint-disable react/jsx-filename-extension */
import React, {
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import {
  list,
} from '../../services/Breweries';

import Main from './styles';
import Card from '../../components/card';
import Header from '../../components/header';

import AppContext from '../../contexts';

function MainPage() {
  const [breweriesList, setBreweriesList] = useState([]);

  const navigate = useNavigate();

  const deleteBrewery = (id:string):void => {
    const changedList = breweriesList.filter((brewery) => brewery.id !== id);

    setBreweriesList(changedList);
  };

  const {
    name,
  } = useContext(AppContext);

  useEffect(() => {
    if (!name || name.length < 1) {
      navigate('/');
    }

    const request = async () => {
      const req = await list();

      setBreweriesList(req);
    };

    request();
  }, []);

  return (
    <>
      <Header
        name={name}
      />
      <Main>
        {
          breweriesList.map(({
            id,
            name: breweryName,
            brewery_type: type,
            street,
            city,
            state,
            country,
            phone,
            postal_code: zipcode,
          }:{
            id:string,
            name:string,
            brewery_type:string,
            street:string,
            city:string,
            state:string,
            country:string,
            phone:string,
            postal_code:string,
          }) => (
            <Card
              key={id}
              id={id}
              name={breweryName}
              type={type}
              street={street}
              city={city}
              state={state}
              country={country}
              phone={phone}
              zipcode={zipcode}
              handleDelete={deleteBrewery}
            />
          ))
        }
      </Main>
    </>
  );
}

export default MainPage;
