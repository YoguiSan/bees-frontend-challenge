/**
 * @jest-environment jsdom
 */

 import React from 'react';

 import Card from '../';
 
 import {
   render,
   screen,
 } from '@testing-library/react';
 
 beforeEach(() => {
   render(
    <Card
      city="São Paulo"
      country="Brazil"
      handleDelete={(id:string) => console.log(id)}
      name="Cervejaria daqui mesmo"
      id="cervejaria-daqui-mesmo"
      phone="1112345678"
      state="São Paulo"
      street="Rua de São Paulo"
      type="micro"
      zipcode="12345678"
      key="cervejaria-daqui-mesmo"
    />
   )
 });
 
 describe('testes do componente card', () => {
   test('componente montou', () => {
    const CardTitle = screen.getByText('Cervejaria daqui mesmo');

    expect(CardTitle).toBeDefined();
   });
 });
 