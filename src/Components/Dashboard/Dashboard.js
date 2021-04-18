import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../images/logo.png'

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    return (
        <section className="dashboard-content container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div  className="col-md-10 container-fluid">
                    <span className="d-flex">
                        <h3 style={{'margin-left':'80px', 'margin-top':'50px','color': '#928e8e'}}>Dashboard</h3>
                        
                    </span>
                    
                    <div className="row customer-order-list">
                        <h3 style={{'margin-left':'30%', 'margin-top':'64px','color': '#928e8e'}}> 
                        <img src= {logo} alt="" style = {{height:'50%'}} />
                
                         </h3>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Dashboard;