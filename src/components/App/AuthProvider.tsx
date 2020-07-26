import React, {ReactNode, ReactPropTypes} from "react";

const AuthContext = React.createContext<any>("Auth");

// export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;

export const withAuth = (Component: string) => (props: ReactPropTypes) => (
    <AuthContext.Consumer>
        {value => <Component {...props} {...value} />}
    </AuthContext.Consumer>
);

interface IProps {
    children: ReactNode
}

export const AuthProvider = (children: IProps) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const login = (email: string, password: string) => {
        setIsLoggedIn(true);
    };
    const logout = () => {
        setIsLoggedIn(false);
    };
    return (
        <AuthContext.Provider value={{isLoggedIn, username: login, logout}}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;