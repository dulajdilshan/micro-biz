import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import CustomerForm from "../CustomerForm";

export default class CustomersPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <button type="button" className="btn btn-secondary btn-lg" data-toggle="modal"
                                data-target="#customerForm">New Customer
                        </button>
                    </div>
                    <div className="col-sm-2">
                        <button type="button" className="btn btn-outline-primary btn-lg" //data-toggle="modal"
                            //data-target="#customerForm"
                        >Make a group
                        </button>
                    </div>
                </div>
                <br/>
                <DataTable/>
                <CustomerForm/>
            </div>
        );
    }
}

if (document.getElementById('customer-page')) {
    ReactDOM.render(<CustomersPage/>, document.getElementById('customer-page'));
}
