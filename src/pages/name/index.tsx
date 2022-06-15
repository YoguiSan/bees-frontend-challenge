/* eslint-disable react/jsx-filename-extension */
import React, { FC, useContext, useState } from 'react';

import AppContext from '../../contexts';

import Article from './styles';

function NamePage() {
  const {
    setName,
  } = useContext(AppContext);

  const [fullName, setFullName] = useState<string | undefined>();

  const change = (({
    target: {
      value,
    },
  }: {
    target: {
      value: string,
    },
  }):void => {
    setFullName(value);
  });

  const submit = (event:React.MouseEvent<HTMLElement>):void => {
    event.preventDefault();

    if (!fullName || fullName.length < 1) {
      console.log('Name is required');
    } else {
      setName(fullName);
    }
  };

  return (
    <Article>
      <section>
        <form
          id="name-age-form"
        >
          <label>
            <p>Please, enter your full name below</p>
            <p>Only alphabetical characters are accepted</p>
            <input
              type="text"
              id="name-age-form__name"
              placeholder="Full name"
              onChange={(event) => change(event)}
              value={fullName}
            />
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
