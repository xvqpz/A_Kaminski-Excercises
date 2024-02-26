import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Straipsniukas from './straipsnis.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Straipsniukas/>
  </React.StrictMode>,
)
