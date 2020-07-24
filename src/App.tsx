import React, { Suspense, lazy } from 'react';
import Spinner from 'components/Spinner';

import './App.scss';

// components
const AppRoute = lazy(() => import('./App.route'));
function App(): JSX.Element {
  return (
    <Suspense fallback={<Spinner />}>
      <AppRoute />
    </Suspense>
  );
}

export default App;
