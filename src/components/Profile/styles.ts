export default (theme: any) => ({
    gridContainer: {
        justifyContent: "center",
        minHeight: "100vh"
    },
    paper: {
        padding: theme.spacing(3),
        margin: theme.spacing(6, 0)
    },
    commonFieldsInputLabelProps: {
        fontSize: 14,
        marginTop: -8
    },
    commonFieldsInputProps: {
        fontSize: 16,
        padding: 0,
        paddingBottom: 0,
        paddingTop: 0,
        marginTop: 4
    },
    saveBtn: {
        fontSize: 14
    }
});