import { useState } from 'react';
import './App.css';

function App() {
  const [lang, setLang] = useState('en');

  const translations = {
    en: 'Բարև աշխարհ!',
    ru: 'გამარჯობა მსოფლიო',
    es: 'Hej, världen!',
    fr: 'Hallo, Welt!',
  };

  return (
    <div className="app">
      <div className="card">
        <h1>{translations[lang]}</h1>
        <div className="buttons">
          <button onClick={() => setLang('en')}>🇦🇲 ARM</button>
          <button onClick={() => setLang('ru')}>🇬🇪 GEO</button>
          <button onClick={() => setLang('es')}>🇩🇪 DE</button>
          <button onClick={() => setLang('fr')}>🇨🇭 CHE</button>
        </div>
      </div>
    </div>
  );
}

export default App;