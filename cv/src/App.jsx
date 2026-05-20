// src/App.jsx
import React from 'react';
import ChatPortfolio from './components/ChatPortfolio';
import './index.css';

function App() {
  return (
    <div className="App dark"> {/* Agregamos 'dark' acá para forzar el modo oscuro de Tailwind */}
      <ChatPortfolio />
    </div>
  );
}

export default App;