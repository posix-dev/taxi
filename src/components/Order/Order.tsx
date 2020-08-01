import React, {ChangeEvent, useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Button, Card, Grid} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import {useStyles} from "./useStyles";
import {connect} from "react-redux";
import {clearRoute, getRoute, getRouteRequest} from "../../modules/Order";
import {getAddressList, getAddressListRequest} from "../../modules/Address";
import Alert from "../Alert";
import strings from "./strings";
import {TaxiOrderedInfo} from "../TaxiOrderedInfo";

interface FilmOptionType {
    title: string;
    year: number;
}

const top100Films = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'The Godfather: Part II', year: 1974},
    {title: 'The Dark Knight', year: 2008},
    {title: '12 Angry Men', year: 1957},
    {title: "Schindler's List", year: 1993},
];

const Order: React.FC<any> = (props: any) => {
    const classes = useStyles();
    const [fromAddress, setFromAddress] = useState("");
    const [toAddress, setToAddress] = useState("");
    const {addressList, route} = props;
    const filteredAddressList = addressList.filter((address: string) => {
        if (fromAddress === "") return true;
        return !address.includes(fromAddress);
    }).filter((address:string) => {
        if (toAddress === "") return true;
        return !address.includes(toAddress);
    });

    useEffect(() => {
        const {getAddressListRequest} = props;
        getAddressListRequest();
    }, []);

    function handleRoute() {
        const {getRouteRequest} = props;
        getRouteRequest({from: fromAddress, to: toAddress});
    }

    function onChangeAddressFrom(e: any) {
        setFromAddress(e.target.textContent);
    }

    function onChangeAddressTo(e: any) {
        setToAddress(e.target.textContent);
    }

    function clearCurrentRoute() {
        const {clearRoute} = props;
        setFromAddress("");
        setToAddress("");
        clearRoute();
    }

    return (
        route.length ? (
            <TaxiOrderedInfo onClick={clearCurrentRoute}/>
        ) : (<Grid container className={classes.container}>
            <Grid xs={4} justify={"flex-end"} alignItems={"center"} container item>
                <Card className={classes.card}>
                    <CardContent>
                        <Autocomplete
                            options={filteredAddressList}
                            id="order-address-from"
                            debug
                            onChange={onChangeAddressFrom}
                            renderInput={(params: any) =>
                                <TextField {...params} label="Откуда" margin="normal"/>
                            }
                        />
                        <Autocomplete
                            options={filteredAddressList}
                            id="order-address-to"
                            debug
                            onChange={onChangeAddressTo}
                            renderInput={(params: any) =>
                                <TextField {...params} label="Куда" margin="normal"/>}
                        />

                        <Grid xs={12} justify={"center"} container item>
                            <Button
                                type="submit"
                                variant="contained"
                                className={classes.btnOrderTaxi}
                                onClick={handleRoute}
                                color="primary">Вызвать такси
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>)
    );
};


export default connect(
    state => ({
        route: getRoute(state),
        addressList: getAddressList(state)
    }),
    {getRouteRequest, getAddressListRequest, clearRoute}
)(Order);