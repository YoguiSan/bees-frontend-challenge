import React, { ReactElement, useEffect, useState } from 'react';

import Router from './routes';

import AppContext from './contexts';

import GlobalStyle from './globalStyles';

function App():ReactElement {
  const [name, setName] = useState<string>('');
  const [isOfAge, setIsOfAge] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const set = ():void => {
      const {
        offsetWidth,
      }:{
        offsetWidth:number,
      } = document.body;

      setWidth(offsetWidth);
    };

    window.onresize = ():void => {
      set();
    };

    set();
  }, []);

  return (
    <AppContext.Provider
      key="appcontext-provider"
      value={{
        name,
        setName,
        isOfAge,
        setIsOfAge,
        width,
      }}
    >
      <GlobalStyle />
      <Router />
    </AppContext.Provider>
  );
}

export default App;
