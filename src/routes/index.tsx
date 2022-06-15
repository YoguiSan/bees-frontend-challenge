import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Name from '../pages/name';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Name />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
