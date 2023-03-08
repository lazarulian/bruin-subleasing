import React from 'react'

{/* we want Firebase to redirect to a new window when users click on a button to sign in*/}
const Auth = () => {
    return (
      <div className="auth">
         <button className="googleSignIn"> Log In </button>
      </div>
    );
};

export default Auth;