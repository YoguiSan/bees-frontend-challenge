import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../pages/main';
import Name from '../pages/name';

function Router():ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Name />}
        />
        <Route
          path="/main"
          element={<Main />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
