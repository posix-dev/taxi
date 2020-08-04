import {createStyles} from "@material-ui/core";
import background from "../../background.png";

export const useStyles = createStyles({
    registrationWrapper: {
        backgroundImage: `url(${background})`,
        height: 790
    },
    registrationFormWrapper: {
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 48
    },
    registrationLoginLink: {
        fontSize: 14,
        textDecoration: "underline",
        color: "blue",
        cursor: "pointer"
    },
    registrationIndent: {
        marginTop: 28
    },
    registrationBtnSubmit: {
        marginTop: 36,
        marginBottom: 48,
        minWidth: 160,
        minHeight: 46,
        fontSize: 18,
        fontWeight: 500,
        textTransform: "none"
    }
});