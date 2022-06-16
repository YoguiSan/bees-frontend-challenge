import {
  get,
  request,
} from '../request';

import nock from 'nock';

const url = 'https://examp.le'

const Nock = nock(url);

const mockedResponse = {
  id: 1,
  body: 'ok',
};

const mockedError = {
  error: 'i just simulated an error, no need for panic',
};

describe('testes de requisições', () => {
  test('faz uma requisição e retorna sucesso', async () => {
    Nock
      .get('/')
      .reply(200, mockedResponse);

    const response = await request(url, 'get');

    expect(response).toEqual(mockedResponse);
  });

});