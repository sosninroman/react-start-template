import { ThemeToggleButton } from './ThemeToggleButton';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../theming/ThemeProvider';
import React from 'react';
import { ThemeToggleButtonStory } from './ThemeToggleButtonStory';

const meta: Meta<typeof ThemeToggleButton> = {
  title: 'Otus/Common/ThemeToggleButton',
  component: ThemeToggleButton,
};

export default meta;

export const Default: StoryObj<typeof ThemeToggleButton> = {
  render: () => {
    return (
      <ThemeProvider>
        <ThemeToggleButtonStory />
      </ThemeProvider>
    );
  },
};
