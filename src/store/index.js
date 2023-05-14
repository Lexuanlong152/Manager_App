import React, { useState } from "react";



export const AuthContext= React.createContext({
  auth: false,
  loginHandler: () => {},
  logoutHandler: () =>{}
});

export default (props) => {
  const [auth, setAuth] = useState(false);

  const loginHandler = () =>{
    setAuth(true);
  }
  const logoutHandler = () =>{
    setAuth(false);
  }
  return (
    <AuthContext.Provider
      value={{auth,loginHandler,logoutHandler}}
    >
      {props.children}
    </AuthContext.Provider>
  );
};