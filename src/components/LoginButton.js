// import React from 'react'
// import {useAuth0} from "@auth0/auth0-react";

// const LoginButton = () => {
//     const {loginWithRedirect} =useAuth0()
//   return (
//     <div>
// <button onClick={()=>loginWithRedirect()}>Login</button>


//     </div>
//   )
// }

// export default LoginButton


import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch ,useSelector} from 'react-redux';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const loginpage = () => {
    dispatch(());
  };
  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  )
}

export default LoginButton