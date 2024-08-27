import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import 'primereact/resources/themes/lara-light-pink/theme.css';
import { PrimeReactProvider } from 'primereact/api';

function App() {
 

  return (
    <div className="App">
      <PrimeReactProvider>
        <Home />
      </PrimeReactProvider>
    </div>
  )
}

export default App