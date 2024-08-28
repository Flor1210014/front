import './App.css'
import 'primereact/resources/themes/lara-light-pink/theme.css';
import { PrimeReactProvider } from 'primereact/api';
import { Index } from './pages/Index'
import '/node_modules/primeflex/primeflex.css'

function App() {
 

  return (
    <div className="App">
      <PrimeReactProvider>
        <Index />
      </PrimeReactProvider>
    </div>
  )
}

export default App