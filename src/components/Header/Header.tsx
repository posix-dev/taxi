import React from 'react';
import logo from '../../logo.png';
import {Grid} from '@material-ui/core';
import {AuthConsumer} from "../App/AuthProvider";
import {useStyles} from "./useStyles"
import {Link} from "react-router-dom";

interface HeaderProps {
}

interface HeaderState {
}

const Header: React.FC<HeaderProps> = () => {
    const classes: any = useStyles();

    return (
        <AuthConsumer>
            {auth => (
                <div>
                    <nav className={classes.headerNav}>
                        <div>
                            <Grid className={classes.headerNavList} xs={10} container item
                                  justify={"flex-end"}
                                  alignItems={"center"}>
                                <Grid container item xs={7} alignItems={"flex-start"}>
                                    <img className={classes.navLogo} src={logo} alt="Логотип"/>
                                </Grid>
                                <Grid
                                    data-testid="map"
                                    container
                                    item
                                    xs={1}
                                    alignItems={"center"}
                                >
                                    <Link to="/map">Карта</Link>
                                </Grid>
                                <Grid
                                    data-testid="profile"
                                    item xs={1}
                                >
                                    <Link to="/profile">Профиль</Link>
                                </Grid>
                                <Grid
                                    data-testid="logout"
                                    item
                                    xs={1}
                                    // onClick={() => auth.logout()}
                                >
                                    <Link to="/login">{!auth.isLoggedIn ? "Войти" : "Выйти"}</Link>
                                </Grid>
                            </Grid>
                        </div>
                    </nav>
                </div>
            )}
        </AuthConsumer>
    )
};

export default Header;