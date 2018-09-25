import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import CustomerForm from "../CustomerForm";

export default class CustomersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCustomers: [{}, {}],
            customerTable: {
                columns: [
                    {Header: 'Name', accessor: 'fullName'},
                    {Header: 'NIC', accessor: 'nic'},
                    {Header: 'Group Number', accessor: 'groupNumber'},
                    {Header: 'Loan number', accessor: 'loanNumber'},
                    {Header: 'Loan Amount', accessor: 'loanAmount'},
                    {Header: 'Weekly Payment (Amount)', accessor: 'weeklyPayment'},
                    {Header: 'Phone number', accessor: 'phoneNumber'},

                ], data: [{
                    fullName: 'Jodha Akbar',
                    nic: '956722345v',
                    groupNumber: 3,
                    loanNumber: 2,
                    loanAmount: 23000,
                    weeklyPayment: 21300,
                    phoneNumber: '0712345678'
                }]
            }

        };
    }

    render() {
        let columns = [
            {Header: 'Name', accessor: 'fullName'},
            {Header: 'NIC', accessor: 'nic'},
            {Header: 'Group Number', accessor: 'groupNumber'},
            {Header: 'Loan number', accessor: 'loanNumber'},
            {Header: 'Loan Amount', accessor: 'loanAmount'},
            {Header: 'Weekly Payment (Amount)', accessor: 'weeklyPayment'},
            {Header: 'Phone number', accessor: 'phoneNumber'},

        ];
        let data = [{
            fullName: 'Jodha Akbar',
            nic: '956722345v',
            groupNumber: 3,
            loanNumber: 2,
            loanAmount: 23000,
            weeklyPayment: 21300,
            phoneNumber: '0712345678'
        }];
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <button type="button" className="btn btn-secondary btn-lg" data-toggle="modal"
                                data-target="#customerForm">New Customer
                        </button>
                    </div>
                    <div className="col-sm-3">
                        <button type="button" className="btn btn-outline-primary btn-lg">
                            Create a group ({this.state.selectedCustomers.length})
                        </button>
                    </div>
                </div>
                <br/>
                <DataTable columns={this.state.customerTable.columns} data={this.state.customerTable.data}/>
                <CustomerForm/>
            </div>
        );
    }
}

if (document.getElementById('customer-page')) {
    ReactDOM.render(<CustomersPage/>, document.getElementById('customer-page'));
}
