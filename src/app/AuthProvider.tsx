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
    children: ReactNode,
    navigate: (page: string) => void
}

export const AuthProvider = ({children, navigate}: IProps) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const login = (email: string, password: string) => {
        setIsLoggedIn(true);
        navigate("map");
    };
    const logout = () => {
        setIsLoggedIn(false);
        navigate("login");
    };
    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout}}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;