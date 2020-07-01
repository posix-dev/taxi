import React from "react";

const AuthContext = React.createContext<any>("Auth");

export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;