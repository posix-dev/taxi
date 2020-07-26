import React from 'react';
import logo from '../../logo.png';
import {Grid} from '@material-ui/core';
import {AuthConsumer} from "../App/AuthProvider";
import {useStyles} from "./useStyles"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {isAuthorized, logOut} from "../../modules/Auth";

interface HeaderProps {
    isAuthorized: boolean,
    logOut: any
}

interface HeaderState {
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const classes: any = useStyles();
    const {isAuthorized, logOut} = props;

    const handelLogout = () => logOut();

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
                                    onClick={handelLogout}
                                >
                                    <Link to="/login">{!isAuthorized ? "Войти" : "Выйти"}</Link>
                                </Grid>
                            </Grid>
                        </div>
                    </nav>
                </div>
            )}
        </AuthConsumer>
    )
};

export default connect(
    state => ({
        isAuthorized: isAuthorized(state)
    }),
    {logOut}
)(Header);