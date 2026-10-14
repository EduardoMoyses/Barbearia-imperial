import { HashRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScrollToTop from "./componentes/reutilizavel/scrollToTop.jsx";

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ScrollToTop/>
    <App />
  </HashRouter>,
)
