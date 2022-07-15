// import React from 'react'
// import {useAuth0} from "@auth0/auth0-react";

// const LogoutButton = () => {
//     const {logout} = useAuth0()
//   return (
//     <div>
// <button onClick={()=>logout()}>logout</button>

//     </div>
//   )
// }

// export default LogoutButton


import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button onClick={() => logout()}>
        Log Out
      </button>
    )
  )
}

export default LogoutButton