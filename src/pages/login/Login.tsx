import React, { useState, useCallback } from 'react';
import classNames from 'classnames/bind';
import Input from '@material-ui/core/Input';
// import { useTranslation } from 'react-i18next';

import { useLogin } from 'modules/auth/hooks';

// scss style import
import styles from './Login.module.scss';
const cx = classNames.bind(styles);

type LoginProps = {
  // Todo: define props
};

function Login(props: LoginProps): JSX.Element {
  // const { t } = useTranslation();

  const login = useLogin();

  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });

  const onChange = useCallback((event) => {
    const {
      target: { name, value },
    } = event;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback(() => {
    login(loginInfo);
  }, [loginInfo, login]);

  return (
    <section className={cx('wrap')}>
      <h1>Login</h1>
      <div>
        User Id <Input type="text" name="username" value={loginInfo.username} onChange={onChange} />
      </div>
      <div>
        Password <Input type="password" name="password" value={loginInfo.password} onChange={onChange} />
      </div>
      <button onClick={onSubmit}>Submit</button>
    </section>
  );
}

export default Login;
