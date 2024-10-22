import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export type Language = 'ru' | 'en';

export type LocalizationProviderProps = {
  children: React.ReactNode;
};

export type LocalizationContextType = {
  language: string;
  setLanguage: (language: Language) => void;
  translate: (value: string) => string;
};

const LocalizationContext = createContext<LocalizationContextType>({} as LocalizationContextType);

export const useLocalization = (): LocalizationContextType => useContext(LocalizationContext);

export const LocalizationProvider = ({ children }: LocalizationProviderProps) => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<Language>(i18n.language as Language);

  useEffect(() => {
    if (i18n.language !== currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
  }, [currentLanguage, i18n]);

  return (
    <LocalizationContext.Provider value={{ language: currentLanguage, translate: t, setLanguage: setCurrentLanguage }}>
      {children}
    </LocalizationContext.Provider>
  );
};
