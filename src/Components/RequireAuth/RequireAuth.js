/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useLocation, useNavigate } from 'react-router-dom';

function RequireAuth({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const Component = withAuthenticationRequired(() => children, {
    returnTo: () => navigate(location?.state?.from?.pathname || '/'),
    onRedirecting: () => 'Loading---'
  });
  return <Component />;
}

export default RequireAuth;

// second way
/*

export default withAuthenticationRequired(({ children }) => children, {
  returnTo: () => window.location.hash.substr(1),
  onRedirecting: () => 'Loading---'
});

*/

// <Route
//   component={withAuthenticationRequired(children, {
//     returnTo: () => window.location.hash.substr(1),
//     onRedirecting: () => <h1>Loading----</h1>,
//   })}
//   {...args}
// />;
