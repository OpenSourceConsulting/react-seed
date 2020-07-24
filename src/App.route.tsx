import React, { useEffect, lazy } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Spinner from 'components/Spinner';

import { useGetVersion, useVersion } from 'modules/version/hooks';

import Page from 'pages';

// import Test from 'pages/test';
function AppRoute(): JSX.Element {
  const [getVersion] = useGetVersion();
  const version = useVersion();

  useEffect(() => {
    getVersion();
  }, []);

  return version.applicationVersion ? (
    <BrowserRouter basename={version.contextPath}>
      <Page />
    </BrowserRouter>
  ) : (
    <Spinner />
  );
}

export default AppRoute;
