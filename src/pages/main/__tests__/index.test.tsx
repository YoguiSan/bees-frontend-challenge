/**
 * @jest-environment jsdom
 */

import React from 'react';

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import nock from 'nock';

import Main from '..';

import AppContext from '../../../contexts';

import Config from '../../../utils/config';

const {
  baseURL,
} = Config;

const BreweriesMock = [{
  id: 'Brewery',
  name: 'Your Local Brewery',
  brewery_type: 'micro',
  street: 'Address 1',
  city: 'Seattle',
  state: 'Washington',
  country: 'USA',
  phone: '123456789',
  postal_code: '2111111',
}];

const Nock = nock(baseURL);

describe('testes da página principal', () => {
  Nock
    .get('/breweries')
    .reply(200, BreweriesMock);

  beforeEach(() => {
    render(
      <AppContext.Provider
        key="appcontext-provider"
        value={{
          name: 'Joe',
          setName: (name:string) => console.log(name),
          isOfAge: true,
          setIsOfAge: (isOfAge:boolean) => console.log(isOfAge),
          width: 920,
        }}
      >
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </AppContext.Provider>,
    );
  });

  xtest('componente montou', () => {
    const breweryName = screen.getByText(/Your Local Brewery/);

    expect(breweryName).toBeDefined();
  });
});
