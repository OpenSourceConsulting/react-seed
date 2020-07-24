import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';

import styles from './Layout.module.scss';
const cx = classNames.bind(styles);

function Lnb(): JSX.Element {
  const { t } = useTranslation();

  return (
    <nav className={cx('lnb')}>
      <ul>
        <li>
          <Link to="/todos">{t('Go to todo list')}</Link>
        </li>
        <li>
          <Link to="/file">{t('Go to file sender')}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Lnb;
