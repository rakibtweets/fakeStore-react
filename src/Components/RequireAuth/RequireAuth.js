/* eslint-disable react/jsx-props-no-spreading */
import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RequireAuth({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const Component = withAuthenticationRequired(children, {
    returnTo: () => navigate(location?.state?.from?.pathname || '/')
    // onRedirecting: () => 'Loading---'

  });
  console.log('RequireAuth ~ Component', Component);
  return <Component />;
}

export default RequireAuth;

// <Route
//   component={withAuthenticationRequired(children, {
//     returnTo: () => window.location.hash.substr(1),
//     onRedirecting: () => <h1>Loading----</h1>,
//   })}
//   {...args}
// />;
