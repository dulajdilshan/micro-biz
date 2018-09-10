import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";

export default class CustomerGroupsPage extends Component {
    render() {
        return(
            <div className="container">
                <button className="btn btn-purple"> Add New Group</button>
                <br/>
                <br/>
                <DataTable/>
            </div>
        );
    }
}

if (document.getElementById('customer-groups-page')) {
    ReactDOM.render(<CustomerGroupsPage/>, document.getElementById('customer-groups-page'));
}
