import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-lwfiihcgy8ub1adj.us.auth0.com"
    clientId="JZsd9JSqM91iBKzHFkKAlG1KAqPPOSMh"
    redirectUri={window.location.origin}
    useRefreshTokens
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
