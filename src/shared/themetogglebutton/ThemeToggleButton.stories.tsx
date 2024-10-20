import { ThemeToggleButton } from './ThemeToggleButton';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, useTheme, Theme } from '../../theming/ThemeProvider';
import React from 'react';

const meta: Meta<typeof ThemeToggleButton> = {
    title: 'Otus/Common/ThemeToggleButton',
    component: ThemeToggleButton,
};

export default meta;

const ThemeToggleButtonStory = () => {
    const { theme } = useTheme()

    return (
        <div style={{
            width: 50, height: 50,
            backgroundColor: ((theme === Theme.light) ? "white" : "black"),
            display: "flex", alignItems: "center", justifyContent: "center"
        }}>
            <ThemeToggleButton />
        </div>
    );
};

export const Default: StoryObj<typeof ThemeToggleButton> = {
    render: () => {
        return (
            <ThemeProvider>
                <ThemeToggleButtonStory />
            </ThemeProvider>
        )
    },
};