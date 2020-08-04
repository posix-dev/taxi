import React from "react";
import {Box, Button, Card, Grid} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./useStyles";

export const TaxiOrderedInfo: React.FC<any> = (props: any) => {
    const classes = useStyles();
    const {onClick} = props;
    // const defState = {
    //     isClickedNewOrder: false
    // };
    // const [isClickedNewOrder, setClickedNewOrder] = useState(defState);
    //
    // function handleClickNewOrder() {
    //     setClickedNewOrder({isClickedNewOrder: true});
    // }

    return (
        <Grid container className={classes.container}>
            <Grid xs={4} justify={"flex-end"} alignItems={"center"} container item>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography
                            align="center"
                            gutterBottom={true}
                            variant="h2"
                            component="h1">
                            <Box>Заказ размещён</Box>
                        </Typography>
                        <Typography
                            className={classes.infoDesc}
                            align="left"
                            gutterBottom={true}>
                            <Box fontWeight="fontWeightLight">
                                Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
                            </Box>
                        </Typography>
                        <Grid className={classes.btnContainer} container item justify={"center"}>
                            <Button
                                type="submit"
                                variant="contained"
                                className={classes.btnRouteToProfile}
                                onClick={onClick}
                                color="primary">
                                Сделать новый заказ
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};