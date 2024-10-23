import { ThemeToggleButton } from './ThemeToggleButton';
import { useTheme, Theme } from '../../theming/ThemeProvider';
import React from 'react';

export const ThemeToggleButtonStory = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        width: 50,
        height: 50,
        backgroundColor: theme === Theme.light ? 'white' : 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ThemeToggleButton />
    </div>
  );
};
