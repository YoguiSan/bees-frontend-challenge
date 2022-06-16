import React, { FC, useEffect, useState } from 'react';

import Router from './routes';

import AppContext from './contexts';

import GlobalStyle from './globalStyles';

function App() {
  const [name, setName] = useState<string>('');
  const [isOfAge, setIsOfAge] = useState<boolean>(false);

  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

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
      <GlobalStyle />
      <Router />
    </AppContext.Provider>
  );
}

export default App;
