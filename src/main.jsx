import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SmoothScroll from './components/SmoothScroll'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SmoothScroll>
    <App />
  </SmoothScroll>
)
