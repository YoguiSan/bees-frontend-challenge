import React, { FC, useEffect, useState } from 'react';

import Router from './routes';

import AppContext from './contexts';

function App() {
  const [name, setName] = useState<string>('');
  const [isOfAge, setIsOfAge] = useState<boolean>(false);

  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

  useEffect(() => {
    if (name && name.length > 1) {
      console.log('Name is: ', name);
    }

    console.log(`${isOfAge ? 'Is' : 'Not'} of age`);
  }, [name, isOfAge]);

  return (
    <AppContext.Provider
      key="appcontext-provider"
      value={{
        name,
        setName,
        isOfAge,
        setIsOfAge,
      }}
    >
      <Router />
    </AppContext.Provider>
  );
}

export default App;
