/**
 * @jest-environment jsdom
 */

import React from 'react';

import {
  render,
  screen,
} from '@testing-library/react';
import App from '../App';

beforeEach(() => {
  render(<App />);
});

describe('testes do componente header', () => {
  test('componente montou', () => {
    const FormText = screen.getByText('Please, enter your full name below');

    expect(FormText).toBeDefined();
  });
});
