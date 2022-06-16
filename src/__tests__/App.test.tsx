/**
 * @jest-environment jsdom
 */

import React from 'react';

import App from '../App';

import {
  render,
  screen,
} from '@testing-library/react';

beforeEach(() => {
  render(<App />)
});

describe('testes do componente header', () => {
  test('componente montou', () => {

  });
});
