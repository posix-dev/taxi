import React from 'react';
import './App.sass';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import yellow from "@material-ui/core/colors/yellow";
import grey from "@material-ui/core/colors/grey";
import {BrowserRouter} from "react-router-dom";
import Router from "../Router";
import {Provider} from "react-redux";
import {createMainStore} from "../../store";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: yellow["600"]
        },
        secondary: grey
    },
});

const App: React.FC = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Provider store={createMainStore()}>
                <main>
                    <section>
                        <BrowserRouter>
                            <Router/>
                        </BrowserRouter>
                    </section>
                </main>
            </Provider>
        </MuiThemeProvider>
    );
};

export default App;
