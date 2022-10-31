import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

function WelcomePage() {
  const {
    user, isAuthenticated, isLoading, error
  } = useAuth0();
  console.log('WelcomePage ~ user', user);

  if (error) {
    return (
      <h1 className="text-center font-bold text-red-600">
        Oops...
        {' '}
        {error.message}
        {error.stack}
      </h1>
    );
  }

  if (isLoading) {
    return <h1 className="text-center text-2xl font-bold text-red-600">Loading...</h1>;
  }
  return (
    <main className="flex flex-col items-center space-y-8 ">
      <h1 className="font-bold mt-8 text-4xl text-green-600">Welcome Page</h1>
      <p className="text-gray-600 font-md">Learn more about React Router 6.4</p>
      {/* Profile Info */}

      {
        isAuthenticated && (
          <div className="flex flex-col items-center space-y-6">
            <h1 className="font-bold mt-8 text-4xl text-green-600 capitalize">
              Welcome
              {' '}
              {user.nickname}
            </h1>
            <img className="rounded-full w-[50px]" src={user?.picture} alt="" />

          </div>
        )

      }
    </main>
  );
}

export default WelcomePage;
