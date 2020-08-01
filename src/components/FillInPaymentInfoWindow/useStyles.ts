import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    container: {
        position: "absolute",
        top: 116,
        backgroundColor: "transparent",
    },
    card: {
        padding: 24
    },
    link: {
        textDecoration: "none",
        color: "#000000",
        fontSize: 14,
        width: 300,
        textTransform: 'none'
    },
    btnContainer: {
        marginTop: 36
    },
    btnRouteToProfile: {
        padding: '8px 0'
    },
    fillCard: {
        width: 100
    },
    info: {
        fontSize: 16,
        width: 300,
        marginTop: 36
    }
});