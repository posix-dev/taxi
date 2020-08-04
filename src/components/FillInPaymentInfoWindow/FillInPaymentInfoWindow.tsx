import React from "react";
import {useStyles} from "./useStyles";
import {Box, Button, Card, Grid} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

export const FillInPaymentInfoWindow: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid xs={4} justify={"flex-end"} alignItems={"center"} container item>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography
                            className={classes.fillCard}
                            align="left"
                            gutterBottom={true}
                            variant="h2"
                            component="h1">
                            <Box>Заполните платежные данные</Box>
                        </Typography>
                        <Typography
                            className={classes.info}
                            align="left"
                            gutterBottom={true}>
                            <Box fontWeight="fontWeightLight">
                                Укажите информацию о банковской карте, чтобы сделать заказ.
                            </Box>
                        </Typography>
                        <Grid className={classes.btnContainer} container item justify={"center"}>
                            <Button
                                type="submit"
                                variant="contained"
                                className={classes.btnRouteToProfile}
                                color="primary">
                                <Link className={classes.link} to="/profile">
                                    Перейти в профиль
                                </Link>
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};