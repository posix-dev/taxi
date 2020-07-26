import React from 'react';
import logo from '../../logo-taxi-light.png';
import {Box, Button, Card, Grid, TextField, withStyles} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./useStyles"
import AuthContext, {AuthConsumer} from "../App/AuthProvider";
import {Link} from "react-router-dom";

interface RegistrationProps {
    classes: any
}

interface RegistrationState {
    email: String,
    name: String,
    secondName: String,
    password: String
}

class Registration extends React.Component<RegistrationProps, RegistrationState> {
    static contextType = AuthContext;

    constructor(props: RegistrationProps) {
        super(props);
        this.state = {name: "", secondName: "", password: "", email: ""};

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeSecondName = this.handleChangeSecondName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({email: e.target.value});
    }

    handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({name: e.target.value});
    }

    handleChangeSecondName(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({secondName: e.target.value});
    }

    handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({password: e.target.value});
    }

    render(): React.ReactElement {
        const {classes} = this.props;

        return (
            <AuthConsumer>
                {auth => (
                    <Grid className={classes.registrationWrapper} container>
                        <Grid xs={7} alignItems={"center"} container item justify={"center"}>
                            <img src={logo} alt="Логотип компании"/>
                        </Grid>
                        <Grid xs={4} justify={"flex-end"} alignItems={"center"} container item>
                            <Card className={classes.registrationFormWrapper}>
                                <CardContent>
                                    <Typography
                                        align="left"
                                        gutterBottom={true}
                                        variant="h3"
                                        component="h1">
                                        <Box fontWeight="fontWeightBold">Регистрация</Box>
                                    </Typography>
                                    <Typography
                                        align="left"
                                        gutterBottom={true}
                                        variant="h5"
                                        component="h2">
                                        <Box fontWeight="fontWeightLight">
                                            Уже зарегистрированы?&nbsp;
                                            <Link
                                                className={classes.registrationLoginLink}
                                                to="/login">Войти</Link>
                                        </Box>
                                    </Typography>
                                    <form autoComplete="off">
                                        <TextField
                                            inputProps={{style: {fontSize: 18}}}
                                            InputLabelProps={{style: {fontSize: 18}}}
                                            fullWidth
                                            id="email"
                                            data-testid="email"
                                            color="secondary"
                                            label="Адрес электронной почты"
                                            required
                                            onChange={this.handleChangeEmail}
                                            name={"email"}/>
                                        <div className={classes.registrationIndent}/>
                                        <TextField
                                            inputProps={{style: {fontSize: 18}}}
                                            InputLabelProps={{style: {fontSize: 18}}}
                                            id="name"
                                            color="secondary"
                                            data-testid="name"
                                            label="Имя"
                                            required
                                            onChange={this.handleChangeName}
                                            name={"name"}/>
                                        <TextField
                                            inputProps={{style: {fontSize: 18}}}
                                            InputLabelProps={{style: {fontSize: 18}}}
                                            id="secondName"
                                            color="secondary"
                                            data-testid="secondName"
                                            label="Фамилия"
                                            required
                                            onChange={this.handleChangeSecondName}
                                            name={"secondName"}/>
                                        <div className={classes.registrationIndent}/>
                                        <TextField
                                            inputProps={{style: {fontSize: 18}}}
                                            InputLabelProps={{style: {fontSize: 18}}}
                                            fullWidth
                                            id="password"
                                            data-testid="password"
                                            color="secondary"
                                            label="Пароль"
                                            required
                                            onChange={this.handleChangePassword}
                                            name={"password"}/>
                                        <br/>
                                        <Grid container item justify={"flex-end"}>
                                            <Button
                                                className={classes.registrationBtnSubmit}
                                                type="submit"
                                                data-testid="registrationSubmit"
                                                variant="contained"
                                                color="primary"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    auth.login(this.state.email, this.state.password);
                                                }}
                                            >Зарегистрироваться</Button>
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

export default withStyles(useStyles, {withTheme: true})(Registration);