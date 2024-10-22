import React from 'react';
import './header.css';
import { Logo } from '../logo/Logo';
import { ThemeToggleButton } from '../themetogglebutton/ThemeToggleButton';
import { LanguageToggleButton } from '../languagetogglebutton/LanguageToggleButton';

export const Header = (): React.ReactElement => {
  return (
    <header className="appheader">
      <div className="appheader-content">
        <Logo></Logo>
        <div className="header-toolbar">
          <LanguageToggleButton />
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};
