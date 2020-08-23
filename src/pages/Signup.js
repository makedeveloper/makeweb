import React from 'react';
import { Form, Col, Button } from 'react-bootstrap'
import { Formik, Form as Fm, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import Axios from '../store/axiosInstance'
import { useSetRecoilState } from 'recoil';

import { signin as sg } from '../store/atoms'

function Signup() {


    //global state
    const setLogin = useSetRecoilState(sg)

    //redirect back to signup page if number is not set, or direct access


    const schema = yup.object({
        fullname: yup.string().required('Required!').max(250, 'Name Should be less than 250 characters').test('no Num', "number are not allowed in name", async (val) => { if (val) { return await !val.match(/[0-9]+/) } return false }).test('noSpecial', "Special characters are not allowed in name", async (val) => { if (val) { return await val.match(/[a-z]/i) } return false }),
        username: yup.string().required('Required!').max(250, 'username Should be less than 250 characters'),
        email: yup.string().required('Required!').max(250).email('Enter valid Email !'),
        password1: yup.string().required('Required!').max(250),
        password2: yup.string().required('Required').oneOf([yup.ref('password1'), null], 'Passwords do not match'),
    });

    const initialValues = {
        fullname: "",
        email: "",
        password1: "",
        password2: "",
        username: ''
    }

    const onSubmit = async (values, { resetForm }) => {
        try {
            console.log(values)
            values.password = values.password1
            const response = await Axios.post('/register', values,)
            console.log({ response })
            setLogin(true)
        } catch (error) {
            if (error.response && (error.response.status === 500)) {
                console.log("500 response from server", error)
            }
            else {
                console.log(error)
            }
        }
    }

    return (
        <div>
            <div >
                <div >
                    <div className="row">
                        <div className="col-lg-6 ">
                            <div className="leftDiv">
                                <h1>Signup Here</h1>
                                <Formik
                                    validationSchema={schema}
                                    onSubmit={onSubmit}
                                    initialValues={initialValues}
                                >
                                    <Fm >

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="validationFormik01">
                                                <Form.Label>Full Name</Form.Label>
                                                <Field
                                                    autoFocus
                                                    tabIndex="1"
                                                    type="text"
                                                    placeholder="Full Name"
                                                    name="fullname"
                                                    className="formControl" />
                                                <ErrorMessage name="fullname" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="validationFormik01">
                                                <Form.Label>User Name</Form.Label>
                                                <Field
                                                    autoFocus
                                                    tabIndex="2"
                                                    type="text"
                                                    placeholder="User Name"
                                                    name="username"
                                                    className="formControl" />
                                                <ErrorMessage name="username" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="validationFormik07">
                                                <Form.Label>Email</Form.Label>
                                                <Field
                                                    tabIndex="3"
                                                    type="email"
                                                    placeholder="Email"
                                                    name="email"
                                                    className="formControl" />
                                                <ErrorMessage name="email" />

                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="validationFormik03">
                                                <Form.Label>Password</Form.Label>
                                                <Field
                                                    tabIndex="4"
                                                    type="password"
                                                    placeholder="Password"
                                                    name="password1"
                                                    className="formControl" />
                                                <ErrorMessage name="password1" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="validationFormik04">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Field
                                                    tabIndex="5"
                                                    type="password"
                                                    placeholder='Confirm Password'
                                                    name="password2"
                                                    className="formControl" />
                                                <ErrorMessage name="password2" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Button tabIndex="6" type="submit">Register</Button>
                                    </Fm>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Signup;