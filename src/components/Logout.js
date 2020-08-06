import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Logout = (props) => {
    useEffect(() => {
        localStorage.removeItem('user');
        props.removeUser();
    }, [])
    return(
        <div>
            <h3 className="text-center m-4" style={{color: 'white'}}>
            Successfully logged out!<br />
            <NavLink to="/" className="text-muted text-center">Signin to continue</NavLink>
            </h3>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        removeUser: () => dispatch({type: 'REMOVE_USER'})
    }
}

export default connect(null,mapDispatchToProps)(Logout);