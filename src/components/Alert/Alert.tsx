import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import {Link} from "react-router-dom";

const Alert = (props: any) => {
    const classes = useStyles();
    const {title, text, onClick, buttonText} = props;

    return (
        <>
            <Typography className={classes.paddings} variant="h4" component="h1">
                {title}
            </Typography>
            <Typography className={classes.paddings} component="p" variant="body2">
                {text}
            </Typography>
            <Button className={classes.button} variant="outlined" color="primary">
                <Link
                    className={classes.link}
                    to="/map">
                    {buttonText}
                </Link>
            </Button>
        </>
    );
};

export default Alert;