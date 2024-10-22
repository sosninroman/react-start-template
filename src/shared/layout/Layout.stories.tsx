import React from 'react';
import { Layout } from './Layout';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../theming/ThemeProvider';

const meta: Meta<typeof Layout> = {
  title: 'Otus/Common/Layout',
  component: Layout,
};

export default meta;

export const Default: StoryObj<typeof Layout> = {
  render: () => {
    return (
      <ThemeProvider>
        <Layout>
          <div style={{ margin: 0, height: '500px' }} />
        </Layout>
      </ThemeProvider>
    );
  },
};
