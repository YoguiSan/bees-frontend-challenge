import React, { ReactElement, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import BeeLogo from '../../assets/img/image 1.png';

import AppContext from '../../contexts';

import { AppContextType } from '../../contexts/@types.app';

import Article from './styles';

function NamePage():ReactElement {
  const {
    name,
    setName,
    isOfAge,
    setIsOfAge,
    width,
  }:AppContextType = useContext(AppContext);

  const navigate = useNavigate();

  const submit = (event:React.MouseEvent<HTMLElement>):void => {
    event.preventDefault();

    if (!name || name.length < 1) {
      console.log('Name is required');
    } else if (!isOfAge) {
      console.log('You must be 18 or older to enter');
    } else {
      navigate('/main');
    }
  };

  const replaceSpecialChars = (input:string):string => input.replace(/[^a-zA-Z0-9 ]/, '');

  return (
    <Article
      windowWidth={width}
    >
      <section
        id="name-age-form-container"
      >
        <form
          id="name-age-form"
        >
          <label
            htmlFor="name-age-form__name"
          >
            <p>Please, enter your full name below</p>
            <p>Only alphabetical characters are accepted</p>
            <input
              type="text"
              id="name-age-form__name"
              data-testid="name-age-form__name"
              placeholder="Full name"
              onChange={({
                target: {
                  value,
                },
              }) => setName(replaceSpecialChars(value))}
              value={name}
            />
          </label>
          <label
            htmlFor="isOfAge"
          >
            <input
              type="checkbox"
              id="name-age-form__isOfAge"
              data-testid="name-age-form__isOfAge"
              onChange={({
                target: {
                  checked,
                },
              }) => setIsOfAge(checked)}
              checked={isOfAge}
            />
            Are you older than 18 years old?
          </label>
          <button
            type="submit"
            id="name-age-form__submit"
            data-testid="name-age-form__submit"
            onClick={((event:React.MouseEvent<HTMLElement>) => submit(event))}
            disabled={
              !isOfAge
              || !name
              || name.length < 1
            }
          >
            Enter
          </button>
        </form>
      </section>
      <img
        id="bee-logo"
        src={BeeLogo}
        alt="Logo"
      />
    </Article>
  );
}

export default NamePage;
