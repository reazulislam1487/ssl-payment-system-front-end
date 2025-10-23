import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";


const AuthProvider = ({ children }) => {


  return (
    <AuthContext.Provider>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;