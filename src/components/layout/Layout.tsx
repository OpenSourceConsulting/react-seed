import React from 'react';
import classNames from 'classnames/bind';

import Header from './Header';
import Lnb from './Lnb';

import styles from './Layout.module.scss';
const cx = classNames.bind(styles);

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props): JSX.Element {
  return (
    <div className={cx('layout')}>
      <Header />
      <Lnb />
      <div className={cx('wrap')}>{children}</div>
    </div>
  );
}

export default Layout;
