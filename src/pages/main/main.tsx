import React from 'react';
import { useTranslation } from 'react-i18next';

function Main(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section>
      <h2>Home page</h2>
    </section>
  );
}

export default Main;
