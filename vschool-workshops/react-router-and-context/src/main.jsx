import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom'
import { ContextProvider} from './context/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Router>
)
