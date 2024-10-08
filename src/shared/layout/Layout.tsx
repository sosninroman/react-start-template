import React from 'react';
import './layout.css';
import { Header } from '../header/Header';

interface LayoutContent {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutContent): React.ReactElement => {
  return (
    <div className="layout">
      <Header></Header>
      {children}
    </div>
  );
};
