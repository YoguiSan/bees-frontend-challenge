/**
 * @jest-environment jsdom
 */

import React from 'react';

import {
  render,
  screen,
} from '@testing-library/react';
import Chip from '..';

beforeEach(() => {
  render(
    <Chip
      text="Chip"
      editable={false}
      icon={null}
    />,
  );
});

describe('testes do componente chip', () => {
  test('componente montou', () => {
    const Chip = screen.getByText('Chip');

    expect(Chip).toBeDefined();
  });
});
