import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { Test } from './pages/Test'
import 'primereact/resources/themes/lara-light-pink/theme.css';
import { PrimeReactProvider } from 'primereact/api';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/test" element={<Test/>} />
        </Routes>
      </BrowserRouter>
      </PrimeReactProvider>
    </div>
  )
}

export default App