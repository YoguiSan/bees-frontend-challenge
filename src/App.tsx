import React, { FC, useState } from 'react';

import Router from './routes';

import AppContext from './contexts';

function App() {
  const [name, setName] = useState<string | undefined>();

  return (
    <AppContext.Provider
      key="appcontext-provider"
      value={{
        name,
        setName,
      }}
    >
      <Router />
    </AppContext.Provider>
  );
}

export default App;
