import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import './index.css'

import MainPage from './MainPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <MainPage />
    <Footer />
    </StrictMode>,
)
