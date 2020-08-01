import text from "./strings";

const validate = (values: any) => {
    const errors: any = {};

    if (!values.name) {
        errors.name = text.validate.importantError;
    }

    if (!values.card) {
        errors.card = text.validate.importantError;
    }

    if (!values.date) {
        errors.date = text.validate.importantError;
    }

    if (!values.cvv) {
        errors.cvv = text.validate.importantError;
    }

    return errors;
};

export default validate;