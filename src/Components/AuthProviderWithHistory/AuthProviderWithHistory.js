import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { redirect } from 'react-router-dom';

function AuthProviderWithHistory({ children }) {
  const onRedirectCallback = (appState) => {
    redirect(appState?.returnTo || window.location.pathname);
  };
  return (
    <Auth0Provider
      domain="dev-lwfiihcgy8ub1adj.us.auth0.com"
      clientId="JZsd9JSqM91iBKzHFkKAlG1KAqPPOSMh"
      redirectUri={window.location.origin}
      useRefreshTokens
      cacheLocation="localstorage"
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

export default AuthProviderWithHistory;