/**
 * @jest-environment jsdom
 */

import React from 'react';

import {
  prettyDOM,
  render,
  RenderResult,
  screen,
} from '@testing-library/react';
import App from '../App';

let renderer:RenderResult;

describe('testes do componente app', () => {
  beforeEach(() => {
    renderer = render(<App />);
  });

  test('componente montou', () => {
    const Container = prettyDOM(renderer.container);

    expect(Container).toBeDefined();

    /*
    const FormText = screen.getByText(/Please, enter your full name below/);

    expect(FormText).toBeDefined();
    */
  });
});
