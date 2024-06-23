import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client'
import './style/index.css';
 
const root = document.querySelector('#root')
root && createRoot(root).render(<App />)
