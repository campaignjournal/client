import React from "react"
import axios from "axios"
import { Formik, Field, Form } from "formik"

const RegisterForm = () => {

    const userRegister = (values) => {
        axios.post("https://campaign-journal-api.herokuapp.com/api/users/register", values)
            .then(res => {
                console.log("Data sent")
            })
            .catch(res => {
                console.log("Data rejected")
            })
    }

    return (
        <div>
            <h1>Register an account</h1>
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                    email: "",
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    userRegister(values)
                    setSubmitting(false)
                    resetForm()
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label>Username:</label>
                        <Field type="username" name="username" />
                        <label>Password:</label>
                        <Field type="password" name="password" />
                        <label>Email:</label>
                        <Field type="email" name="email" />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegisterForm