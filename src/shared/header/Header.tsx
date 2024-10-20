import React, { useCallback, useState } from 'react';
import './header.css';
import { Logo } from '../logo/Logo';
import { ThemeToggleButton } from '../themetogglebutton/ThemeToggleButton';

export const Header = (): React.ReactElement => {

  return (
    <header className="appheader">
      <div className="appheader-content">
        <Logo></Logo>
        <ThemeToggleButton />
      </div>
    </header>
  );
};
