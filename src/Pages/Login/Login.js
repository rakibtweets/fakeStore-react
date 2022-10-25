import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../HOC/useFirebase';

function Login() {
    const { signWithGoogle } = useFirebase();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
      signWithGoogle();
      navigate('/');
    };

  return (
    <div className="w-full">
      <h1 className="my-16 text-center text-4xl font-bold text-green-500">Login Page</h1>
      <div className="w-full flex justify-center  ">
        <button onClick={() => handleGoogleLogin()} type="button" className="btn px-8 py-4 border-none outline-none bg-blue-600 hover:bg-blue-500">Login with Google</button>
      </div>
    </div>
  );
}

export default Login;
