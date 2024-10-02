import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesMain from './RoutesMain.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RoutesMain />
  </BrowserRouter>

)

