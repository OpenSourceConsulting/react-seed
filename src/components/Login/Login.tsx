import React, { useCallback } from 'react';
import { Auth } from 'modules/auth/types';
import useLogin from 'modules/auth/hooks/useLogin';
import useLogout from 'modules/auth/hooks/useLogout';
import ss from './Login.module.scss';

type Props = {
  auth: Auth;
};

function Login({ auth }: Props): JSX.Element {
  const isLoggedIn = auth.memberId !== null;

  const login = useLogin();
  const logout = useLogout();

  const onClick = useCallback((): void => {
    if (isLoggedIn) logout();
    else login({ username: 'a_username', password: 'thisispassword' });
  }, [isLoggedIn, login, logout]);

  return (
    <>
      <p className={ss.ml2r}>
        {isLoggedIn ? (
          <>
            Currently logged in <strong>{auth.userName}. </strong>
          </>
        ) : (
          <>You can sign in here → </>
        )}
        <button type="button" onClick={onClick}>
          Log {isLoggedIn ? 'out' : 'in'}
        </button>
      </p>
    </>
  );
}

export default Login;
