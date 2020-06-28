import React from 'react';
import logo from '../logo.png';
import './Header.sass';
import {createStyles, Grid} from '@material-ui/core';

const useStyles = createStyles({

});

interface HeaderProps {
    navigate: (page: string) => void
}

interface HeaderState {

}

class Header extends React.Component<HeaderProps, HeaderState> {

    render(): React.ReactElement {

        return (
            <div>
                <nav className="headerNav">
                    <div>
                        <Grid className="headerNavList" xs={10} container item justify={"flex-end"}
                              alignItems={"center"}>
                            <Grid container item xs={7} alignItems={"flex-start"}>
                                <img className="navLogo" src={logo} alt="Логотип"/>
                            </Grid>
                            <Grid container item xs={1} alignItems={"center"}
                                  onClick={() => this.props.navigate("map")}>
                                Карта
                            </Grid>
                            <Grid item xs={1} onClick={() => this.props.navigate("profile")}>Профиль</Grid>
                            <Grid item xs={1} onClick={() => this.props.navigate("login")}>Войти</Grid>
                        </Grid>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;