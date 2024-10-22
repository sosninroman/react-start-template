import React, { useCallback } from "react";
import { Language, useLocalization } from "../../localization/LocalizationProvider";
import "./languagetogglebutton.css"

export const LanguageToggleButton = () => {
    const { translate, language, setLanguage } = useLocalization()
    const toggleLanguage = () => {
        if (language === "ru") {
            setLanguage("en")
        } else {
            setLanguage("ru")
        }
    }
    return (
        <div className="language-toggle-button" onClick={toggleLanguage}>
            {language}
        </div>
    )
} 