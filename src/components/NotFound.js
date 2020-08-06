import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const NotFound = (props) => {
    return( 
    <div style={{color: 'white'}} className="text-center m-4">
        <h1>Error Occured - 404</h1>
        {
            props.user.email ?
            <NavLink to="/dashboard" className="nav-link" style={{textDecoration: 'none', color: 'white'}}><p>Please go back to home!</p></NavLink>
            :
            <NavLink to="/" className="nav-link" style={{textDecoration: 'none', color: 'grey'}}><h3>Else signin first!</h3></NavLink>
        }
    </div>
    )
};

const mapStateToProps = state => {
    return{
        user: state.users
    }
}

export default connect(mapStateToProps)(NotFound);
