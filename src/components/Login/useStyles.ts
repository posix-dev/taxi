import {createStyles} from "@material-ui/core";
import background from "../../background.png";

export const useStyles = createStyles({
    loginFormWrapper: {
        backgroundImage: `url(${background})`,
        height: 790
    },
    loginForm: {
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 48
    },
    loginRegistrationLink: {
        fontSize: 14,
        textDecoration: "underline",
        color: "blue",
        cursor: "pointer"
    },
    loginSubmitBtn: {
        marginTop: 36,
        marginBottom: 48,
        minWidth: 160,
        minHeight: 46,
        fontSize: 18,
        fontWeight: 500,
        textTransform: "none"
    }
});