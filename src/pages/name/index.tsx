import React, { FC, useState } from 'react';

import Article from './styles';

function NamePage() {
  const [name, setName] = useState<string | undefined>();

  const change = (({
    target: {
      value,
    },
  }: {
    target: {
      value: string,
    },
  }) => {
    console.log(value);
    setName(value);
  });

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
              id="name"
              placeholder='Full name'
              onChange={event => change(event)}
              value={name}
            />
          </label>
        </form>
      </section>
    </Article>
  );
}

export default NamePage;
