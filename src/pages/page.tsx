import React, { lazy, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// const
import * as routePath from 'common/const/route-path';

// auth
import { refreshTokenOnInitialAuthCheck } from 'common/api/auth';

// modules
import { useAuth, Auth } from 'modules/auth';

// components
import Layout from 'components/layout';
// import Main from 'pages/main';
// import Todos from 'pages/todos';
// import File from 'pages/file';
const Main = lazy(() => import('pages/main'));
const Todos = lazy(() => import('pages/todos'));
const File = lazy(() => import('pages/file'));
const Login = lazy(() => import('pages/login'));

function Page(): JSX.Element {
  const auth: Auth = useAuth();

  /** Fetch new accessToken using the token stored in the cookie. */
  useEffect(() => {
    (async () => {
      await refreshTokenOnInitialAuthCheck();
    })();
  }, []);

  return auth.memberId ? (
    <Layout>
      <Switch>
        <Route path={routePath.PATH_MAIN} exact component={Main} />
        <Route path={routePath.PATH_TODOS} exact component={Todos} />
        <Route path="/file" exact component={File} />
        {/* <Route path={routePath.PATH_TEST} component={Test} /> */}
        <Redirect path="*" to={routePath.PATH_MAIN} />
      </Switch>
    </Layout>
  ) : (
    <Switch>
      <Route path={routePath.PATH_LOGIN} component={Login} />
      {/* <Route path={routePath.PATH_TEST} component={Test} /> */}
      <Redirect path="*" to={routePath.PATH_LOGIN} />
    </Switch>
  );
}

export default Page;
