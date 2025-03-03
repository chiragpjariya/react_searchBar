import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Providers from './provider'

createRoot(document.getElementById('root')).render(
  <Providers>
    <App />
  </Providers>,
)
