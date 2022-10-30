/* eslint-disable react/jsx-props-no-spreading */
import { withAuthenticationRequired } from '@auth0/auth0-react';

function RequireAuth({ children }) {
  return children;
}

export default withAuthenticationRequired(RequireAuth, {
  returnTo: () => window.location.hash.substr(1),
  onRedirecting: () => 'Loading---'
});

// <Route
//   component={withAuthenticationRequired(children, {
//     returnTo: () => window.location.hash.substr(1),
//     onRedirecting: () => <h1>Loading----</h1>,
//   })}
//   {...args}
// />;
