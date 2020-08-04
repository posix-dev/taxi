import React, {PureComponent} from 'react';
import Header from "../Header/Header";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";
import {connect} from "react-redux";
import {Box, Button, Grid} from "@material-ui/core";
import {Field} from "react-final-form";
import {Fragment} from "react";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {Form} from "react-final-form";
import {TextField} from "final-form-material-ui";
import formatStringByPattern from "format-string-by-pattern";
import {profileSubmitRequest, getProfileData} from "../../modules/Profile";
import Alert from "../Alert";
import styles from "./styles";
import strings from "./strings";
import validate from "./validate";
import DateFnsUtils from "@date-io/date-fns";
import {getToken} from "../../modules/Auth";

interface ProfileProps {
    classes: any,
    profileSubmit: any,
    profileData: any,
    isSubmit: any,
    token: string
}

interface ProfileState {

}

function DatePickerWrapper(props: any) {
    const {
        input: {name, onChange, value, ...restInput},
        meta,
        ...rest
    } = props;
    const showError =
        ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
        meta.touched;

    return (
        <KeyboardDatePicker
            {...rest}
            name={name}
            helperText={showError ? meta.error || meta.submitError : undefined}
            error={showError}
            inputProps={restInput}
            onChange={onChange}
            value={value === "" ? null : value}
            format="MM/yyyy"
            autoOk={true}
            variant="inline"
            style={{marginTop: 0}}
        />
    );
}

const formatCards = (anyString: string) => {
    const onlyNumbers = anyString.replace(/[^\d]/g, "");

    return formatStringByPattern("9999 9999 9999 9999", onlyNumbers);
};

const formatCvv = (anyString: string) => {
    const onlyNumbers = anyString.replace(/[^\d]/g, "");

    return formatStringByPattern("999", onlyNumbers);
};

class Profile extends PureComponent<ProfileProps, ProfileState> {
    state = {
        isSubmit: false
    };

    handleSubmit = (values: any) => {
        const {profileSubmit, token} = this.props;
        profileSubmit({...values, token: token});
        this.setState({isSubmit: true})
    };

    render() {
        const {classes, profileData} = this.props;
        const { isSubmit } = this.state;

        return (
            <div>
                <Header/>
                <Grid container spacing={0} className={classes.gridContainer}>
                    <Grid item xs={10} md={8}>
                        <Paper className={classes.paper}>
                            {isSubmit ? (
                                <Alert
                                    title={strings.success.title}
                                    text={strings.success.text}
                                    buttonText={strings.success.buttonText}/>
                            ) : (
                                <Fragment>
                                    <Typography
                                        align="center"
                                        gutterBottom={true}
                                        variant="h2"
                                        component="h1">
                                        {strings.profile}
                                    </Typography>

                                    <Typography gutterBottom={true} variant="h3" component="h3">
                                        {strings.paymentMethod}
                                    </Typography>

                                    <Form
                                        onSubmit={this.handleSubmit}
                                        validate={validate}
                                        initialValues={profileData}
                                        render={({handleSubmit}) => (
                                            <form onSubmit={handleSubmit}>
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12} md={6}>
                                                        <Field
                                                            component={TextField}
                                                            name="name"
                                                            InputLabelProps={{className: classes.commonFieldsInputLabelProps}}
                                                            InputProps={{className: classes.commonFieldsInputProps}}
                                                            required
                                                            label={strings.labels.name}
                                                            placeholder={strings.placeholders.name}
                                                            fullWidth={true}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Field
                                                            name="card"
                                                            component={TextField}
                                                            InputLabelProps={{className: classes.commonFieldsInputLabelProps}}
                                                            InputProps={{className: classes.commonFieldsInputProps}}
                                                            required
                                                            label={strings.labels.card}
                                                            placeholder={strings.placeholders.date}
                                                            fullWidth={true}
                                                            parse={formatCards}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                            <Field
                                                                name="date"
                                                                component={DatePickerWrapper}
                                                                InputLabelProps={{className: classes.commonFieldsInputLabelProps}}
                                                                InputProps={{className: classes.commonFieldsInputProps}}
                                                                fullWidth={true}
                                                                required
                                                                margin="normal"
                                                                label={strings.labels.date}
                                                                placeholder={strings.placeholders.date}
                                                            />
                                                        </MuiPickersUtilsProvider>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Field
                                                            name="cvv"
                                                            component={TextField}
                                                            required
                                                            InputLabelProps={{className: classes.commonFieldsInputLabelProps}}
                                                            InputProps={{className: classes.commonFieldsInputProps}}
                                                            label={strings.labels.cvv}
                                                            placeholder={strings.placeholders.cvv}
                                                            fullWidth={true}
                                                            parse={formatCvv}
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Box mt={6}>
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        className={classes.saveBtn}
                                                        color="primary">
                                                        {strings.labels.submit}
                                                    </Button>
                                                </Box>
                                            </form>
                                        )}
                                    />
                                </Fragment>
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default connect(
    state => ({
        profileData: getProfileData(state),
        token: getToken(state)
    }),
    {profileSubmit: profileSubmitRequest}
)(withStyles(styles)(Profile));