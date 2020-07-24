import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

// scss style import
import styles from './Sample.module.scss';
const cx = classNames.bind(styles);

type SampleProps = {
  //Todo: define props
};

function Sample(props: SampleProps): JSX.Element {
  const { t } = useTranslation();

  // remove this line
  console.log('porps of Sample: ', props);

  return <div className={cx('wrap')}>{t('This is an i18n sample.')} - Component</div>;
}

export default Sample;
