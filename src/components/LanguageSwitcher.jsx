import React from 'react';
import { useTranslation } from 'react-i18next';
import usaFlag from '../assets/images/usa.png';
import brazilFlag from '../assets/images/brazil.png';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div className="flags">
        <img src={usaFlag} alt="USA Flag" onClick={() => changeLanguage('en-us')} />
        <img src={brazilFlag} alt="Brazil Flag" onClick={() => changeLanguage('pt-BR')} />
      </div>
    </div>
  );
}

export default LanguageSwitcher;
