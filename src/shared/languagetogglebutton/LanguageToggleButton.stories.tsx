import { LanguageToggleButton } from './LanguageToggleButton';
import type { Meta, StoryObj } from '@storybook/react';
import { LocalizationProvider } from '../../localization/LocalizationProvider';
import React from 'react';
import '../../localization/i18n';

const meta: Meta<typeof LanguageToggleButton> = {
  title: 'Otus/Common/LanguageToggleButton',
  component: LanguageToggleButton,
};

export default meta;

export const Default: StoryObj<typeof LanguageToggleButton> = {
  render: () => {
    return (
      <LocalizationProvider>
        <LanguageToggleButton />
      </LocalizationProvider>
    );
  },
};
