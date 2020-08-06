import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { connect } from 'react-redux';

import '../styles/signin.css';
import { loginUser } from '../redux/actions/Users.actions';

const Signin = (props) => {
    const moveToSignup = () => {
        props.history.push("/signup");
    }
    return( 
    <div className="signin">
        <div style={{marginTop: '50px'}}>
            <div className="m-2">
                Need an account? 
                <button className="m-2 btn button"
                onClick={moveToSignup}
                >Signup</button>
            </div>
            <h3 className="text-center">Login</h3>
            <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema= {
                yup.object({
                    email: yup.string().required('Email was required').email('Please enter valid email id'),
                    password: yup.string().required('Password was required').min(6,'Password should contain minimum 6 characters')
                    .max(12,'Password can contain atmost 12 characters')
                })
            }
            onSubmit={
                (values,onSubmitProps) =>{
                    const user = {
                        email: values.email,
                        password: values.password
                    }
                    axios.post('https://task-management-rest-app.herokuapp.com/api/users/login',user)
                    .then(res=>{
                        const {_id,email,firstName,lastName} = res.data.data;
                            const user = {
                                userid: _id,
                                email: email,
                                firstname: firstName,
                                lastname: lastName
                            };
                            props.signin(user);
                            onSubmitProps.resetForm();
                            props.history.push("/dashboard");
                    })
                    .catch(err => console.log(err))
                    
                }
            }
            >
                <Form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" className="form-control"/>
                        <ErrorMessage name="email" component="div" className="alert-danger"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" className="form-control"/>
                        <ErrorMessage name="password" component="div" className="alert-danger"/>
                    </div>
                    <button type="submit" 
                    style={{backgroundColor: '#09A79E', color: 'white'}} 
                    className="btn form-control">Login</button>
                </Form>
            </Formik>
        </div>
    </div>
    )
};

const mapDispatchToProps = dispatch => {
    return{
        signin: (user) => dispatch(loginUser(user))
    }
}

export default connect(null,mapDispatchToProps)(Signin);
