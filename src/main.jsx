import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { StateProvider } from './contextAPI/StateProvider'
import reducer, { initialState } from './contextAPI/Reducer'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <StateProvider initialState={initialState} reducer={reducer}>
     <App />
   </StateProvider>
  </React.StrictMode>
)
