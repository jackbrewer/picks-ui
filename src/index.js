import React from 'react'
import ReactDOM from 'react-dom'
import App from './layout/app/App'
import './asset/css/index.css'

ReactDOM.render(<App />, document.getElementById('root'))

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => navigator.serviceWorker.register('/service-worker.js'))
}
