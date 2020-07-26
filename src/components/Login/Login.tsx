import React, {SyntheticEvent} from 'react';

import logo from '../../logo-taxi-light.png';
import {Box, Button, Card, Grid, TextField, withStyles} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./useStyles"
import AuthContext, {AuthConsumer} from "../App/AuthProvider";
import {Link} from "react-router-dom";

interface LoginProps {
    classes: any
}

interface LoginState {
    name: String,
    password: String
}

class Login extends React.Component<LoginProps, LoginState> {
    static contextType = AuthContext;

    constructor(props: LoginProps) {
        super(props);
        this.state = {name: "", password: ""};

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({name: e.target.value});
    }

    handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({password: e.target.value});
    }

    handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        this.context.login(this.state.name, this.state.password);
    }

    render(): React.ReactElement {
        const {classes} = this.props;

        return (
            <AuthConsumer>
                {auth => (
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
                                                to="/registration">Зарегистрируйтесь</Link>
                                        </Box>
                                    </Typography>
                                    <form autoComplete="off">
                                        <TextField
                                            inputProps={{style: {fontSize: 18}, "data-testid": "login"}}
                                            InputLabelProps={{style: {fontSize: 18}}}
                                            fullWidth
                                            id="login"
                                            // data-testid="login"
                                            color="secondary"
                                            label="Имя пользователя"
                                            required
                                            onChange={this.handleChangeName}
                                            value={this.state.name}
                                            name={"login"}/>
                                        <br/>
                                        <div style={{marginTop: 28}}/>
                                        <TextField
                                            inputProps={{style: {fontSize: 18, minWidth: 370}}}
                                            InputLabelProps={{style: {fontSize: 18}}}
                                            id="password"
                                            data-testid="myPassword"
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
                                                data-testid="loginSubmit"
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
                )}
            </AuthConsumer>
        )
    }
}

export default withStyles(useStyles, {withTheme: true})(Login);