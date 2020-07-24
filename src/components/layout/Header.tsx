import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

// const
import { PATH_MAIN } from 'common/const/route-path';

import useLogout from 'modules/auth/hooks/useLogout';

import styles from './Layout.module.scss';

const cx = classNames.bind(styles);

function Header(): JSX.Element {
  const logout = useLogout();

  return (
    <header className={cx('header')}>
      <h1>
        <Link className={cx('logo')} to={PATH_MAIN}>
          Toy App
        </Link>
      </h1>
      <button type="button" className={cx('logout')} onClick={logout}>
        Logout
      </button>
    </header>
  );
}

export default Header;
