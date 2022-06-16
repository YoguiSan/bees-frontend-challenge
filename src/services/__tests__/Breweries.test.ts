import nock from 'nock';

import Config from '../../utils/config';

import { list } from '../Breweries';

const {
  baseURL,
} = Config;

const Nock = nock(baseURL);

describe('testes da requisição de listar cervejarias', () => {
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

  test('lista cervejarias', async () => {
    Nock
      .get('/breweries')
      .reply(200, BreweriesMock);

    const response = await list();

    expect(response).toEqual(BreweriesMock);
  });

  test('ocorre erro ao listar cervejarias', async() => {
    Nock
      .get('/breweries')
      .reply(500);

      const response = await list();

      expect(typeof (response)).toEqual('object');
  });
});

