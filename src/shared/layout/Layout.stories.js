import { React } from 'react';
import { Layout } from './Layout';

const meta = {
  title: 'Otus/Common/Layout',
  component: Layout,
};

export default meta;

export const Default = {
  args: {
    children: [<div key={1} style={{ margins: 0, height: '500px' }} />],
  },
};
