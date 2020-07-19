import React from 'react';
import logo from '../logo.png';
import {Grid} from '@material-ui/core';
import {NavigateConsumer} from '../app/NavigateContext'
import {AuthConsumer} from "../app/AuthProvider";
import {useStyles} from "./useStyles"

interface HeaderProps {
}

interface HeaderState {

}

const Header: React.FC<HeaderProps> = () => {
    const classes: any = useStyles();

    return (
        <NavigateConsumer>
            {consumer => (
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
                                            onClick={() => consumer.navigate("map")}
                                        >Карта</Grid>
                                        <Grid
                                            data-testid="profile"
                                            item xs={1}
                                            onClick={() => consumer.navigate("profile")}
                                        >Профиль</Grid>
                                        <Grid
                                            data-testid="logout"
                                            item
                                            xs={1}
                                            onClick={() => auth.logout()}
                                        >{!auth.isLoggedIn ? "Войти" : "Выйти"}</Grid>
                                    </Grid>
                                </div>
                            </nav>
                        </div>
                    )}
                </AuthConsumer>
            )}
        </NavigateConsumer>
    )
};

export default Header;