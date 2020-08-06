import React, { useEffect } from 'react';
//import axios from 'axios';
import Header from './Header';

const Dashboard = (props) => {
    useEffect(() => {
        // axios.get("https://task-management-rest-app.herokuapp.com/api/tasks")
        // .then(res=> console.log(res))
        // .catch(err => console.log(err))
    }, [])
    return( 
    <div>
        <Header />
    </div>
    )
};

export default Dashboard;
