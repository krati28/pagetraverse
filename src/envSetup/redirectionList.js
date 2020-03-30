import React, { Component } from 'react';
import AddRedirectionList from '../addComponents/add_redirectionList';
import {Route, NavLink, HashRouter} from "react-router-dom";

class RedirectionList extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <div>
                        <h1>This is RedirectionList Page</h1>
                        <NavLink to="/addComponents/add_redirectionList">add Redirection</NavLink>
                    </div>

                    <div className="content">
                        <Route path="../addComponents/add_redirectionList" component={AddRedirectionList} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default RedirectionList;