import React, { LazyExoticComponent, ReactElement, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Main:LazyExoticComponent<any> = React.lazy(() => import('../pages/main'));
const Name:LazyExoticComponent<any> = React.lazy(() => import('../pages/name'));

function Router():ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <Suspense fallback={<></>}>
              <Name />
            </Suspense>
          )}
        />
        <Route
          path="/main"
          element={(
            <Suspense fallback={<></>}>
              <Main />
            </Suspense>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
