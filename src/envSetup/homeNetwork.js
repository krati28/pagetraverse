import React, { Component } from 'react';
import {Route, NavLink, HashRouter } from 'react-router-dom';
import AddHomeNetwork from '../addComponents/add_homeNetwork';


class HomeNetwork extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <h1> Home Network Elements</h1>
                    <h2><NavLink  to="/addComponents/add_homeNetwork" > add home ntw </NavLink> </h2>
                </div>

                <div className="content">
                    <Route path to="/addComponents/add_homeNetwork" component={AddHomeNetwork}/>
                </div>
            </HashRouter>
        )
    }
}

export default HomeNetwork;