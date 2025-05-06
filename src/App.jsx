import { useState } from 'react';
import './App.css';

function App() {
  const [lang, setLang] = useState('en');

  const translations = {
    en: 'Hello, World!',
    ru: 'Привет, мир!',
    es: '¡Hola, mundo!',
    fr: 'Bonjour le monde!',
  };

  return (
    <div className="app">
      <div className="card">
        <h1>{translations[lang]}</h1>
        <div className="buttons">
          <button onClick={() => setLang('en')}>🇬🇧 EN</button>
          <button onClick={() => setLang('ru')}>🇷🇺 RU</button>
          <button onClick={() => setLang('es')}>🇪🇸 ES</button>
          <button onClick={() => setLang('fr')}>🇫🇷 FR</button>
        </div>
      </div>
    </div>
  );
}

export default App;