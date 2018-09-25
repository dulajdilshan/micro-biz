import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import CustomerForm from "../CustomerForm";
import {getAllCustomerData} from "../../actions/customerPageActions";
import axios from "axios/index";

export default class CustomersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCustomer:{},
            selectedCustomers: [{}, {}],
            customerList:[],
            customerTable: {
                columns: [
                    {Header: 'Name', accessor: 'full_name'},
                    {Header: 'NIC', accessor: 'nic'},
                    {Header: 'Group Number', accessor: 'group_id'},
                    {Header: 'Loan number', accessor: 'first_name'},
                    {Header: 'Loan Amount', accessor: 'first_name'},
                    {Header: 'Weekly Payment (Amount)', accessor: 'gender'},
                    {Header: 'Phone number', accessor: 'contact_no1'},

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

    componentDidMount(){
        axios.get('/api/customers')
            .then(res => {
                this.setState({customerList: res.data});
            })
            .catch(err => {
                alert("Customers loading failed !! server may be down ..try starting the server and reload the page again");
            });
    }

    render() {
        // this.setState({customerList: getAllCustomerData()});

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
                <DataTable columns={this.state.customerTable.columns} data={this.state.customerList}/>
                <CustomerForm/>
            </div>
        );
    }
}

if (document.getElementById('customer-page')) {
    ReactDOM.render(<CustomersPage/>, document.getElementById('customer-page'));
}
