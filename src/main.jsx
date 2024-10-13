/**
 * @copyright 2024 Harsh-keshari
 * @license Apache-2.0
 */


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Components
 */

import App from './App.jsx';

/**
 * CSS Links
 */

import './index.css'
import 'lenis/dist/lenis.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
