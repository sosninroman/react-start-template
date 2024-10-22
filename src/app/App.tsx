import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '../theming/ThemeProvider'
import { LocalizationProvider } from '../localization/LocalizationProvider';

function App() {
  return (
    <LocalizationProvider>
      <ThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Соснин Роман</h2>
            <p>Занимаюсь разработкой десктопных и мобильных приложений на C++ с использованием фреймворка Qt.</p>
            <p>
              Решил пройти курс, чтобы систематизировать знания о React&apos;е для применения этой библиотеки в рабочих
              проектах.
            </p>
            <p>Telegram: @sosnin_roman</p>
          </header>
        </div>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
