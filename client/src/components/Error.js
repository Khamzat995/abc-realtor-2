import React from "react";
import { useTranslation } from 'react-i18next';

const Error = () => {
  const { t } = useTranslation();
  return (
    <div className="section section-center text-center">
      <h4>{t('error-text')}</h4>
    </div>
  );
};

export default Error;
