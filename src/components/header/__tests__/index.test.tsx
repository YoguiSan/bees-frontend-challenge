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

import Header from '..';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Header
        name="Joe"
      />
    </BrowserRouter>,
  );
});

describe('testes do componente header', () => {
  test('componente montou', () => {
    const GoBackButton = screen.getByText('Go back');

    expect(GoBackButton).toBeDefined();

    fireEvent.click(GoBackButton);
  });
});
