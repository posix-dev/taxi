import React from "react";
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import useStyles from "./styles";
import message from "./message";

export default (PageNotFound: any) => {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            className={classes.gridContainer}
        >
            <Grid item xs={3}>
                <Card>
                    <CardContent>
                        <Typography
                            align="center"
                            gutterBottom={true}
                            variant="h4"
                            component="h1"
                        >
                            {message.title}
                        </Typography>
                        <Typography component="p" gutterBottom={true}>
                            {message.desck}
                        </Typography>
                        <Link className={classes.link} to="/">
                            <ArrowBackIos className={classes.arrow}/> {message.link}
                        </Link>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};