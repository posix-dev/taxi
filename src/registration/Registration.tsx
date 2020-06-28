import React, {SyntheticEvent} from 'react';
import logo from '../logo-taxi-light.png';
import background from '../background.png';
import {Box, Button, Card, createStyles, Grid, Link, TextField, withStyles} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


//todo('вынести стайлы в отдельный файл')
const useStyles = createStyles({
    registrationWrapper: {
        backgroundImage: `url(${background})`,
        height: 790
    },
    registrationFormWrapper: {
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 48
    },
    registrationLoginLink: {
        fontSize: 14,
        textDecoration: "underline",
        color: "blue",
        cursor: "pointer"
    },
    registrationIndent: {
        marginTop: 28
    },
    registrationBtnSubmit: {
        marginTop: 36,
        marginBottom: 48,
        minWidth: 160,
        minHeight: 46,
        fontSize: 18,
        fontWeight: 500,
        textTransform: "none"
    }
});

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

    constructor(props: RegistrationProps) {
        super(props);
        this.state = {name: "", secondName: "", password: "", email: ""};

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeSecondName = this.handleChangeSecondName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        alert(`hello ${this.state.name} ${this.state.password}`);
    }

    render(): React.ReactElement {
        const {classes} = this.props;

        return (
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
                                    <Link className={classes.registrationLoginLink} href="#">Войти</Link>
                                </Box>
                            </Typography>
                            <form autoComplete="off">
                                <TextField
                                    inputProps={{style: {fontSize: 18}}}
                                    InputLabelProps={{style: {fontSize: 18}}}
                                    fullWidth
                                    id="email"
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
                                    label="Имя"
                                    required
                                    onChange={this.handleChangeName}
                                    name={"name"}/>
                                <TextField
                                    inputProps={{style: {fontSize: 18}}}
                                    InputLabelProps={{style: {fontSize: 18}}}
                                    id="secondName"
                                    color="secondary"
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
                                        variant="contained"
                                        color="primary"
                                        onClick={e => this.handleSubmit(e)}
                                    >Зарегистрироваться</Button>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles, {withTheme: true})(Registration);