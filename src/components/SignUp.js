import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import axios from 'axios';

import { createUser } from '../redux/actions/Users.actions';
import '../styles/signup.css';

const Signup = (props) => {
    const moveToLogin = () => {
        props.history.push("/")
    };

    return( 
    <div className="signupform">
        <div style={{marginTop: '50px'}}>
            <div className="m-2">
                Already have an account? 
                <button className="btn button ml-2" onClick={moveToLogin}>Login</button>
            </div>
            <h3 className="text-center">Signup</h3>
            <Formik
            initialValues= {{
                firstname: '',
                lastname: '',
                emailid: '',
                password: ''
            }}
            validationSchema= {
                yup.object({
                    firstname: yup.string().required('First name should be required').min(3,'First name should be minimum 3 characters'),
                    lastname: yup.string().required('Last name should be required'),
                    emailid: yup.string().required('Email should be required').email('Please enter valid email address'),
                    password: yup.string().required('Password should be required').min(6,'Password should be minimum 6 characters').max(12,'Password should be atmost 12 characters')
                })
            }
            onSubmit={
                (values,onSubmitProps)=>{
                    const user = {
                        firstName: values.firstname,
                        lastName: values.lastname,
                        email: values.emailid,
                        password: values.password
                    }
                    axios.post('https://task-management-rest-app.herokuapp.com/api/users',user)
                    .then(res => {
                        if(res.data){
                            const {_id,email,firstName,lastName} = res.data.data;
                            const user = {
                                userid: _id,
                                email: email,
                                firstname: firstName,
                                lastname: lastName
                            };
                            props.createUser(user);
                            onSubmitProps.resetForm();
                            props.history.push("/")
                        }
                    })
                    .catch(err => console.log(err))
                    
                }
            }
            >
                <Form>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" name="firstname" className="form-control"/>
                        <ErrorMessage name="firstname" component="div" className="alert-danger"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <Field type="text" name="lastname" className="form-control"/>
                        <ErrorMessage name="lastname" component="div" className="alert-danger"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email ID</label>
                        <Field type="email" name="emailid" className="form-control"/>
                        <ErrorMessage name="emailid" component="div" className="alert-danger"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" className="form-control"/>
                        <ErrorMessage name="password" component="div" className="alert-danger"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" 
                        className="form-control btn"
                        style={{backgroundColor: '#09A79E', color: 'white'}}
                        >Continue</button>
                        <small className="text-muted mt-4">
                        By Signingup i accept the 
                        <b>Terms & Condition</b> and the <b>Privacy Policy</b> of sync
                        </small>
                    </div>
                </Form>
            </Formik>
        </div>
    </div>
    )
};

const mapDispatchToProps = dispatch => {
    return{
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(null,mapDispatchToProps)(Signup);
