import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import GroupForm from "../GroupForm";

export default class CustomerGroupsPage extends Component {
    render() {
        return(
            <div className="container">
                <button type="button" className="btn btn-secondary btn-lg" data-toggle="modal"
                        data-target="#groupForm">New Group
                </button>
                
                <br/>
                <br/>
                <DataTable/>
                <GroupForm/>
            </div>
        );
    }
}

if (document.getElementById('customer-groups-page')) {
    ReactDOM.render(<CustomerGroupsPage/>, document.getElementById('customer-groups-page'));
}
