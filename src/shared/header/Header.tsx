import React from 'react';
import './header.css';
import { Logo } from '../logo/Logo';

export const Header = (): React.ReactElement => {
  return (
    <header className="appheader">
      <div className="appheader-content">
        <Logo></Logo>
      </div>
    </header>
  );
};
