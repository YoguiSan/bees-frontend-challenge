/**
 * @jest-environment jsdom
 */

import React from 'react';

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

import Main from '..';
import { BrowserRouter } from 'react-router-dom';

import AppContext from '../../../contexts';

beforeEach(() => {
  render(
    <AppContext.Provider
      key="appcontext-provider"
      value={{
        name: 'Joe',
        setName: (name:string) => console.log(name),
        isOfAge: true,
        setIsOfAge: (isOfAge:boolean) => console.log(isOfAge),
      }}
    >
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </AppContext.Provider>
  );
});

describe('testes do componente header', () => {
  test('componente montou', () => {
    /*
    const GoBackButton = screen.getByText('Go back');

    expect(GoBackButton).toBeDefined();

    fireEvent.click(GoBackButton);
    */
  });
});
