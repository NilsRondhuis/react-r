import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from 'components/example-1/App/App';
// import App from 'components/example-2/App/App';
import App from 'components/example-3/App/App';
import './index.css';
import players from './data/players.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App players={players} />
  </React.StrictMode>
);
