import React, {SyntheticEvent} from 'react';

import logo from '../logo-taxi-light.png';
import background from '../background.png';
import {Box, Button, Card, createStyles, Grid, Link, TextField, withStyles} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

//todo('вынести стайлы в отдельный файл')
const useStyles = createStyles({
    loginFormWrapper: {
        backgroundImage: `url(${background})`,
        height: 790
    },
    loginForm: {
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 48
    },
    loginRegistrationLink: {
        fontSize: 14,
        textDecoration: "underline",
        color: "blue",
        cursor: "pointer"
    },
    loginSubmitBtn: {
        marginTop: 36,
        marginBottom: 48,
        minWidth: 160,
        minHeight: 46,
        fontSize: 18,
        fontWeight: 500,
        textTransform: "none"
    }
});

interface LoginProps {
    classes: any,
    navigate: (page: string) => void
}

interface LoginState {
    name: String,
    password: String
}

class Login extends React.Component<LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props);
        this.state = {name: "", password: ""};

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRouteToRegistration = this.handleRouteToRegistration.bind(this);
    }

    handleRouteToRegistration(e: SyntheticEvent) {
        e.preventDefault();
        this.props.navigate("registration");
    }

    handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({name: e.target.value});
    }

    handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({password: e.target.value});
    }

    handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        this.props.navigate("map");
    }

    render(): React.ReactElement {
        const {classes} = this.props;

        return (
            <Grid className={classes.loginFormWrapper} container>
                <Grid xs={7} alignItems={"center"} container item justify={"center"}>
                    <img src={logo} alt="Логотип компании"/>
                </Grid>
                <Grid xs={4} justify={"flex-end"} alignItems={"center"} container item>
                    <Card className={classes.loginForm}>
                        <CardContent>
                            <Typography
                                align="left"
                                gutterBottom={true}
                                variant="h3"
                                component="h1">
                                <Box fontWeight="fontWeightBold">Войти</Box>
                            </Typography>
                            <Typography
                                align="left"
                                gutterBottom={true}
                                variant="h5"
                                component="h2">
                                <Box fontWeight="fontWeightLight">
                                    Новый пользователь?&nbsp;
                                    <Link
                                        className={classes.loginRegistrationLink}
                                        onClick={this.handleRouteToRegistration}
                                        href="#">Зарегистрируйтесь</Link>
                                </Box>
                            </Typography>
                            <form autoComplete="off">
                                <TextField
                                    inputProps={{style: {fontSize: 18}}}
                                    InputLabelProps={{style: {fontSize: 18}}}
                                    fullWidth
                                    id="login"
                                    color="secondary"
                                    label="Имя пользователя"
                                    required
                                    onChange={this.handleChangeName}
                                    name={"login"}/>
                                <br/>
                                <div style={{marginTop: 28}}/>
                                <TextField
                                    inputProps={{style: {fontSize: 18, minWidth: 370}}}
                                    InputLabelProps={{style: {fontSize: 18}}}
                                    id="password"
                                    label="Пароль"
                                    color="secondary"
                                    onChange={this.handleChangePassword}
                                    required type={"password"}
                                    name={"password"}/>
                                <br/>
                                <Grid container item justify={"flex-end"}>
                                    <Button
                                        className={classes.loginSubmitBtn}
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        onClick={e => this.handleSubmit(e)}
                                    >Войти</Button>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles, {withTheme: true})(Login);