import React, { FC, useContext, useState } from 'react';

import AppContext from '../../contexts';

import Article from './styles';

function NamePage() {
  const {
    name,
    setName,
    isOfAge,
    setIsOfAge,
  } = useContext(AppContext);

  /*
  const changeName = (({
    target: {
      value,
    },
  }: {
    target: {
      value: string,
    },
  }):void => {
    setName(value);
  });
  */

  const submit = (event:React.MouseEvent<HTMLElement>):void => {
    event.preventDefault();

    if (!name || name.length < 1) {
      console.log('Name is required');
    } else if (!isOfAge) {
      console.log('You must be 18 or older to enter');
    } else {
      console.log('Redirecting...');
    }
  };

  return (
    <Article>
      <section>
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
              placeholder="Full name"
              onChange={({
                target: {
                  value,
                },
              }) => setName(value)}
              value={name}
            />
          </label>
          <label
            htmlFor="isOfAge"
          >
            <input
              type="checkbox"
              id="name-age-form__isOfAge"
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
            onClick={((event:React.MouseEvent<HTMLElement>) => submit(event))}
          >
            Enter
          </button>
        </form>
      </section>
    </Article>
  );
}

export default NamePage;
