import { createRoot } from 'react-dom/client' 
import React from 'react'
import './index.css' 
import App from './App' 
import { Provider } from 'react-redux'
import store from './store/common-store'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store ={ store }>
      <App />
    </Provider>
  </React.StrictMode>
) 
