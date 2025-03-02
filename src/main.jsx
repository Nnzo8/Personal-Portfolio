// Import necessary React dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
// Import main App component and styles
import App from './assets/App'
import './index.css'

// Create root element and render React application
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode helps identify potential problems
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
