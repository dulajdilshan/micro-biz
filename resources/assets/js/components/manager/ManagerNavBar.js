import React, { Component } from 'react';
import ReactDOM from "react-dom";

export class ManagerNavBar extends Component{
    render(){
        return(<div>

        </div>);
    }
}

if (document.getElementById('manager-nav')) {
    ReactDOM.render(<ManagerNavBar />, document.getElementById('manager-nav'));
}