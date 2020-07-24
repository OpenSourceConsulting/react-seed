import React from 'react';
import { Link } from 'react-router-dom';
import FileSender from 'components/FileSender';
import { useTranslation } from 'react-i18next';

function File(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <FileSender />
      <div style={{ margin: '2rem 0 0 2rem' }}>
        <Link to="/">{t('Go to homepage')}</Link>
      </div>
    </>
  );
}

export default File;
