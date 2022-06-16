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

import Name from '..';

import AppContext from '../../../contexts';

const NameInputLabel = /Full name/;
const CheckboxId = /name-age-form__isOfAge/;
const SubmitButtonId = /Enter/;

describe('testes da página de informar nome', () => {
  let NameInput:HTMLInputElement;
  let OfAgeCheckbox:HTMLInputElement;
  let SubmitButton:HTMLButtonElement;

  let name:string;
  let isOfAge:boolean;

  beforeEach(() => {
    render(
      <AppContext.Provider
        key="appcontext-provider"
        value={{
          name,
          setName: (nameInput:string) => name = nameInput,
          isOfAge,
          setIsOfAge: (isOfAgeInput:boolean) => isOfAge = isOfAgeInput,
        }}
      >
        <BrowserRouter>
          <Name />
        </BrowserRouter>
      </AppContext.Provider>
    );

    NameInput = screen.getByPlaceholderText(NameInputLabel);
    OfAgeCheckbox = screen.getByTestId(CheckboxId);
    SubmitButton = screen.getByText(SubmitButtonId);
  });

  test('componente montou e encontrou inputs do formulário', () => {
    expect(NameInput).toBeDefined();
    expect(OfAgeCheckbox).toBeDefined();
    expect(SubmitButton).toBeDefined();
    
  });
  
  test('tenta acessar sem marcar opção de ser maior de idade', () => {
    fireEvent.change(NameInput, { target: { value: 'Test' } });
  
    SubmitButton = screen.getByText(SubmitButtonId);

    expect(SubmitButton.disabled).toBeTruthy();
  });

  test('tenta acessar sem informar nome', () => {
    fireEvent.change(NameInput, { target: { value: '' } });
    fireEvent.click(OfAgeCheckbox);
    SubmitButton = screen.getByText(SubmitButtonId);

    expect(SubmitButton.disabled).toBeTruthy();
  });

  xtest('entra preenchendo dados corretamente', () => {
    fireEvent.change(NameInput, { target: { value: 'Test' } });

    OfAgeCheckbox = screen.getByTestId(CheckboxId);

    if (!OfAgeCheckbox.checked) {
      fireEvent.click(OfAgeCheckbox);
    }

    SubmitButton = screen.getByText(SubmitButtonId);

    SubmitButton.disabled = false;

    fireEvent.click(SubmitButton);
  });
});
