import React, { useCallback } from "react";
import { Theme, useTheme } from "../../theming/ThemeProvider";
import { Sun, Moon } from 'lucide-react'
import "./themetogglebutton.css"

export const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className="theme-toggle-button" onClick={toggleTheme}>
            {theme === Theme.light ? <Sun /> : <Moon color="white" />}
        </div>
    )
} 