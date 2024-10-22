import React from 'react';
import { useLocalization } from '../../localization/LocalizationProvider';
import './languagetogglebutton.css';

export const LanguageToggleButton = () => {
  const { language, setLanguage } = useLocalization();
  const toggleLanguage = () => {
    if (language === 'ru') {
      setLanguage('en');
    } else {
      setLanguage('ru');
    }
  };
  return (
    <div className="language-toggle-button" onClick={toggleLanguage}>
      {language}
    </div>
  );
};
