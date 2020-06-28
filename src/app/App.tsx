import React from 'react';
import './App.sass';
import Login from "../login/Login";
import Map from "../map/Map";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import yellow from "@material-ui/core/colors/yellow";
import grey from "@material-ui/core/colors/grey";
import Registration from "../registration/Registration";
import Profile from "../profile/Profile";

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

class App extends React.Component {
    state = {currentPage: "map"};

    navigateTo = (page: String) => {
        this.setState({currentPage: page})
    };

    render(): React.ReactElement {
        const Page = PAGES[this.state.currentPage];

        return (
            <MuiThemeProvider theme={theme}>
                <main>
                    <section>
                        {/*<Page navigate={this.navigateTo}/>*/}
                        <Registration/>
                    </section>
                </main>
            </MuiThemeProvider>
        )
    }
}

export default App;
