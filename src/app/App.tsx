import React, {useState} from 'react';
import './App.sass';
import Login from "../login/Login";
import Map from "../map/Map";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import yellow from "@material-ui/core/colors/yellow";
import grey from "@material-ui/core/colors/grey";
import Registration from "../registration/Registration";
import Profile from "../profile/Profile";
import {NavigateProvider} from "./NavigateContext"
import {AuthProvider} from "./AuthProvider"

const PAGES: any = {
    login: Login,
    registration: Registration,
    map: Map,
    profile: Profile
};

const theme = createMuiTheme({
    palette: {
        primary: {
            main: yellow["600"]
        },
        secondary: grey
    },
});

const defaultState = {
    currentPage: "login"
};

const App: React.FC = () => {
    const [mapState, setMapState] = useState(defaultState);
    const Page = PAGES[mapState.currentPage];

    const navigateTo = (page: string) => setMapState({currentPage: page});

    return (
        <MuiThemeProvider theme={theme}>
            <main>
                <section>
                    <NavigateProvider value={{navigate: navigateTo}}>
                        <AuthProvider navigate={navigateTo}>
                            <Page/>
                        </AuthProvider>
                    </NavigateProvider>
                </section>
            </main>
        </MuiThemeProvider>
    );
};

export default App;
