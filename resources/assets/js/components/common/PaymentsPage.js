import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";

export default class PaymentsPage extends Component {
    render() {
        return(
            <div className="container">
                <button className="btn btn-purple"> Add New Customer</button>
                <br/>
                <br/>
                <DataTable/>
            </div>
        );
    }
}

if (document.getElementById('payments-page')) {
    ReactDOM.render(<PaymentsPage/>, document.getElementById('payments-page'));
}
