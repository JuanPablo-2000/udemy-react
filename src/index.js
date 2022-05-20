import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.js';
<<<<<<< HEAD
import { CounterApp } from './CounterApp.js';
=======
>>>>>>> 56db3c5243208672409ae930aec02226284cd5e8

import './index.css';

const container = document.getElementById('root');

const root = createRoot(container);

<<<<<<< HEAD
root.render(<CounterApp value={1234} />);
    //<App saludo='Hola soy, Goku' 
// subtitule='Dragon Ball 💢💥✨'/>);
=======
root.render(<App />);
>>>>>>> 56db3c5243208672409ae930aec02226284cd5e8
