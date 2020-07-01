import React from 'react';
import logo from '../logo.png';
import './Header.sass';
import {createStyles, Grid} from '@material-ui/core';
import NavigateContext from "../app/NavigateContext";
import {NavigateConsumer} from '../app/NavigateContext'

const useStyles = createStyles({});

interface HeaderProps {
    // navigate: (page: string) => void
}

interface HeaderState {

}

class Header extends React.Component<HeaderProps, HeaderState> {
    static contextType = NavigateContext;

    componentDidMount() {
        // const user = this.context;
        // console.dir(`hey ${user}`)
    }

    render(): React.ReactElement {

        return (
            <NavigateConsumer>
                {consumer => (
                    <div>
                        <nav className="headerNav">
                            <div>
                                <Grid className="headerNavList" xs={10} container item justify={"flex-end"}
                                      alignItems={"center"}>
                                    <Grid container item xs={7} alignItems={"flex-start"}>
                                        <img className="navLogo" src={logo} alt="Логотип"/>
                                    </Grid>
                                    <Grid container item xs={1} alignItems={"center"}
                                          onClick={() => consumer.navigate("map")}>
                                        Карта
                                    </Grid>
                                    <Grid item xs={1} onClick={() => consumer.navigate("profile")}>Профиль</Grid>
                                    <Grid item xs={1} onClick={() => consumer.navigate("login")}>Войти</Grid>
                                </Grid>
                            </div>
                        </nav>
                    </div>
                )}
            </NavigateConsumer>
        )
    }
}

export default Header;