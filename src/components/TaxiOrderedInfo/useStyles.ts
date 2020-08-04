import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    container: {
        position: "absolute",
        top: 116,
        backgroundColor: "transparent",
    },
    card: {
        padding: 24,
        width: 400,
    },
    btnContainer: {
        marginTop: 36
    },
    btnRouteToProfile: {
        padding: '8px 0',
        textDecoration: "none",
        color: "#000000",
        fontSize: 14,
        width: 410,
        textTransform: 'none'
    },
    infoDesc: {
        fontSize: 16,
        marginTop: 36
    }
});