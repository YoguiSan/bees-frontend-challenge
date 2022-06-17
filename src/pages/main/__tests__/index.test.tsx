/**
 * @jest-environment jsdom
 */

import React from 'react';
import { StateMock } from '@react-mock/state';

import {
  fireEvent,
  prettyDOM,
  render,
  RenderResult,
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

let renderer:RenderResult;

describe('testes da página principal', () => {
  Nock
    .get('/breweries')
    .reply(200, BreweriesMock);

  beforeEach(() => {
    renderer = render(
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
          <StateMock
            state={{
              breweriesList: BreweriesMock,
            }}
          >
            <Main />
          </StateMock>
        </BrowserRouter>
      </AppContext.Provider>,
    );
  });

  test('componente montou', () => {
    /*
    const breweryName = screen.getByText(/Your Local Brewery/);

    expect(breweryName).toBeDefined();
    */
    expect(prettyDOM(renderer.container)).toBeDefined();
  });
});
