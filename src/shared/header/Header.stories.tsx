import { Header } from './Header';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../theming/ThemeProvider';
import { LocalizationProvider } from '../../localization/LocalizationProvider';
import React from 'react';

const meta: Meta<typeof Header> = {
  title: 'Otus/Common/Header',
  component: Header,
};

export default meta;

export const Default: StoryObj<typeof Header> = {
  render: () => {
    return (
      <LocalizationProvider>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      </LocalizationProvider>
    );
  },
};
