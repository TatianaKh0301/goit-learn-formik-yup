import { Formik, Form, ErrorMessage } from "formik";
import {Input} from "./LoginForm.styled";
// import { object, string, InferType } from 'yup';
import * as yup from "yup";


const schema = yup.object().shape({
    login: yup.string().length(5).required(),
    password: yup.string().min(3).max(16).required(),
});

// let userSchema = object({
//     login: string().required(),
//     password: string().required,    
// });


const initialValues = {
    login: "",
    password: "",
};

export const LoginForm = () => {
    // const handleSubmit = event => {
    //     event.preventDefault();
        // const formElements = event.target.elements;
        // const { login, password } = event.target.elements;
        // console.log(login.value, password.value);
    // };
    

    const handleSubmit = (values, { resetForm }) => {
        console.log("values", values);
        console.log("action", { resetForm });
        resetForm();
    }

    return(
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
            <Form autoComplete="off">
                <label htmlFor="login">
                    Login
                    <Input type="text" name="login" />
                    <ErrorMessage name="login" component="div"/>
                </label>
                <label htmlFor="password">
                    Password
                    <Input type="password" name="password" />
                    <ErrorMessage name="password" component="div"/>
                </label>
                <button type="submit">Submit</button>
            </Form>
        </Formik>        
    );
};