import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.js';
import { CounterApp } from './CounterApp.js';

import './index.css';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<CounterApp value={1234} />);
    //<App saludo='Hola soy, Goku' 
// subtitule='Dragon Ball 💢💥✨'/>);