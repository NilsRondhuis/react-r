import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import HTTPReqAbort from './components/HTTPReqAbort/HTTPReqAbort';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <HTTPReqAbort />
  </React.StrictMode>
);
