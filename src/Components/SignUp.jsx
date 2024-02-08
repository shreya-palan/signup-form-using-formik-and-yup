import React from 'react';
import { Formik, Form } from 'formik';
import TextField  from './TextField';
import * as Yup from 'yup';

/* Formik and Form: Components from the Formik library for managing form state.
   Yup: A validation library for defining validation schema*/

const SignUp = () => {

    /* Validation Scheme(Yup)*/

    /*validate is the constant that defines Yup validation scheme using object method */

    const validate = Yup.object({
        firstName: Yup.string() /*specifies field should be a string*/
        .max(15, "Must be 15 characters or less") /*Sets max length of 15 char for first name*/
        .required('Required'), /*first name filed should not be empty*/
        lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required('Required'),
        email: Yup.string()
        .email("Email is invalid")
        .required('Email is required'),
        password: Yup.string()
        .min(8, "Password must be atleast 8 characters")
        .required('Password is required'),
        confirmPassword: Yup.string()
        /*oneOf() method ensures that the value of confirm password matches the password filed
          null: ensures that confirm password field is initially empty*/
        .oneOf([Yup.ref('password'), null], "Password must match")
        .required('Confirm password is required'),
        /*It means that the confirm password should either match the password field otherwise it should be empty
          if it does not match the password field then the specified error msg will be shown*/
    })

    return (
        <Formik
            initialValues={{
                /*Specifies the initial value for the fields
                  In this case: all the fields are initially empty */
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            
            /*validationSchema is the prop that is used to pass Yup validation scheme 
              i.e validate to the formik component */
            validationSchema={validate}

            /*This prop executes when the form is submitted.The form values will be displayed
              in the console*/
            onSubmit={values => {
                console.log(values)
            }}
        >
            {formik => (
                <div>
                    <h1 className='my-4 font-weight-bold .display-4'>Sign Up</h1>
                    
                    <Form>
                        <TextField label="First Name" name="firstName" type="text"/>
                        <TextField label="Last Name" name="lastName" type="text"/>
                        <TextField label="Email" name="email" type="email"/>
                        <TextField label="Password" name="password" type="password"/>
                        <TextField label="Confirm Password" name="confirmPassword" type="password"/>
                        <button className="btn btn-dark mt-3 mx-2" type='submit'>Register</button>
                        <button className="btn btn-danger mt-3 ml-3 mx-2" type='reset'>Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default SignUp
