import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = props => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/logout"
                    className="nav-link"
                    style={{color:'white'}}>Logout</NavLink>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                    {
                        props.user.lastname ? 
                        `${props.user.firstname} ${props.user.lastname}`
                        : props.user.firstname
                    }<span class="caret"></span>
                    </div>
                </li>
            </ul>
            
        </nav>
    )
}

const mapStateToProps = state => {
    return{
        user: state.users
    }
}

export default connect(mapStateToProps)(Header);