import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home"
import Stuff from "./Stuff";
import Contact from "./Contact"
import Link1 from "./link1"
import HomeNetwork from './envSetup/homeNetwork';

class Main extends Component{
    render(){
        return(
            <HashRouter>
            <div>
                <h1>SMS Hub</h1>
                <ul className="header">
                    <div class="dropdown">
                        <button class="dropbtn">Service Management</button>
                            <div class="dropdown-content">
                                <ul> <NavLink  to="/link1">Service Parameters</NavLink></ul>
                            </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Environment Setup</button>
                            <div class="dropdown-content">
                                <ul> <NavLink  to="/envSetup/homeNetwork">Home Network</NavLink></ul>
                                <ul> <NavLink  to="/link1">Retry Policy</NavLink></ul>
                                <ul> <NavLink  to="/link1">Redirection Accounts</NavLink></ul>
                                <ul> <NavLink  to="/link1">Redirection Lists</NavLink></ul>
                                <ul> <NavLink  to="/link1">Operator Profile</NavLink></ul>
                                <ul> <NavLink  to="/link1">Path Details</NavLink></ul>
                                <ul> <NavLink  to="/link1">Operator Cluster</NavLink></ul>
                                <ul> <NavLink  to="/link1">LCR Profile</NavLink></ul>
                                <ul> <NavLink  to="/link1">SC AT LCR Profile</NavLink></ul>
                                <ul> <NavLink  to="/link1">Customer Suppliers</NavLink></ul>
                                <ul> <NavLink  to="/link1">HTTP Templates</NavLink></ul>
                                <ul> <NavLink  to="/link1">Customer Supplier Group</NavLink></ul>
                                <ul> <NavLink  to="/link1">Deal Management</NavLink></ul>
                                <ul> <NavLink  to="/link1">Channel Partner</NavLink></ul>
                                <ul> <NavLink  to="/link1">Customer Credit Profile</NavLink></ul>
                                <ul> <NavLink  to="/link1">Credit Transaction</NavLink></ul>
                            </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">ESME Management</button>
                            <div class="dropdown-content">
                                <ul> <NavLink  to="/link1">ESME Accounts</NavLink></ul>
                                <ul> <NavLink  to="/link1">Ports</NavLink></ul>
                            </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Session Management</button>
                            <div class="dropdown-content">
                                <ul> <NavLink  to="/link1">ESME Sessions</NavLink></ul>
                                <ul> <NavLink  to="/link1">SMSC Sessions</NavLink></ul>
                                <ul> <NavLink  to="/link1">Node Sessions</NavLink></ul>
                            </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Rules Management</button>
                            <div class="dropdown-content">
                            <ul> <NavLink  to="/link1">Rules Configuration</NavLink></ul>
                            <ul> <NavLink  to="/link1">Hub Rules Configuration</NavLink></ul>
                                
                            </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Message Management</button>
                            <div class="dropdown-content">
                            <ul> <NavLink  to="/link1">SMS Query</NavLink></ul>
                                
                            </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">User Management</button>
                            <div class="dropdown-content">
                            <ul> <NavLink  to="/link1">Change Password</NavLink></ul>
                            <ul> <NavLink  to="/link1">Provision User</NavLink></ul>
                            <ul> <NavLink  to="/link1">Customer Portal User</NavLink></ul>
                                
                            </div>
                    </div>

                </ul>


                <div className="content">
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/link1" component={Link1}/>
                    <Route path="/envSetup/homeNetwork" component={HomeNetwork}/>
                </div>
            </div>
        </HashRouter>
        );
    }
}

export default Main;