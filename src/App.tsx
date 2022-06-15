import React, { FC, useEffect, useState } from 'react';

import Router from './routes';

import AppContext from './contexts';

function App() {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    if (name && name.length > 1) {
      console.log('Name is: ', name);
    }
  }, [name]);

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
