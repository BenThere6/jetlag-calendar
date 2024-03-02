import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

if (process.env.NODE_ENV === 'production') {
  // Register service worker for production environment
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service worker registered:', registration);
        })
        .catch((error) => {
          console.error('Service worker registration failed:', error);
        });
    });
  }
} else {
  // Service worker registration disabled in development environment
  console.log('Service worker registration skipped in development environment');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)