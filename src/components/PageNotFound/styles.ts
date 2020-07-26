import {makeStyles} from "@material-ui/core/styles";

export default makeStyles(theme => ({
    gridContainer: {
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh"
    },
    link: {
        fontWeight: 600,
        color: "#00ad9f",
        textDecoration: "none",
        fontSize: "1rem"
    },
    arrow: {
        fontSize: ".8rem"
    }
}));