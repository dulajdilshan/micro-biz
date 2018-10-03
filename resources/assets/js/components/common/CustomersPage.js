import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import CustomerForm from "../CustomerForm";
import axios from "axios/index";

export default class CustomersPage extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            customer: {
                first_name: '',
                last_name: '',
                age: '',
                nic: '',
                gender: 'male',
                married: 'single',
                contact_no1: '',
                contact_no2: '',
                address_1: '',
                address_2: ''
            }
        };
        this.state = {
            isFormVisible: false,
            customer: this.initialState.customer,
            selectedCustomers: [{}, {}],
            customerList: [],
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

    _handleNicChange(event) {
        let newCustomer = Object.assign({}, this.state.customer, {nic: event.target.value});
        this.setState({
            customer: newCustomer
        });
    }

    _handleFirstNameChange(event) {
        let newCustomer = Object.assign({}, this.state.customer, {first_name: event.target.value});
        this.setState({
            customer: newCustomer
        });
    }

    _handleLastNameChange(event) {
        let newCustomer = Object.assign({}, this.state.customer, {last_name: event.target.value});
        this.setState({
            customer: newCustomer
        });
    }

    _handleAgeChange(event) {
        let newCustomer = Object.assign({}, this.state.customer, {age: event.target.value});
        this.setState({
            customer: newCustomer
        });
    }

    _handleBirthdayChange(event) {
        let newCustomer = Object.assign({}, this.state.customer, {birthday: event.target.value});
        this.setState({
            customer: newCustomer
        });
    }

    _handleAddress1Change(event) {
        let newCustomer = Object.assign({}, this.state.customer, {address_1: event.target.value});
        this.setState({
            customer: newCustomer
        });
    }

    _handleAddress2Change(event) {
        let newCustomer = Object.assign({}, this.state.customer, {address_2: event.target.value});
        this.setState({
            customer: newCustomer
        });
    }

    _handleContactNo1Change(event) {
        let newCustomer = Object.assign({}, this.state.customer, {contact_no1: event.target.value});
        this.setState({
            customer: newCustomer
        });
    }

    _handleContactNo2Change(event) {
        let newCustomer = Object.assign({}, this.state.customer, {contact_no2: event.target.value});
        this.setState({
            customer: newCustomer
        });
    }

    _handleGenderChange(event) {
        let newCustomer = Object.assign({}, this.state.customer, {gender: event.target.value});
        this.setState({
            customer: newCustomer
        });
    }

    _handleMarriedSingleChange(event) {
        let newCustomer = Object.assign({}, this.state.customer, {married: event.target.value});
        this.setState({
            customer: newCustomer
        });
    }

    _handleCloseButton(event) {
        console.log(this.state);
        this.setState(this.initialState);
        console.log(this.state);
    }

    _resetNewCustomerForm() {
        this.setState(this.initialState);
    }

    _makeNewCustomerFormVisible() {
        this.setState({isFormVisible: true});
    }

    _makeNewCustomerFormInvisible() {
        this.setState({isFormVisible: false});
    }

    componentDidMount() {
        axios.get('/api/customers')
            .then(res => {
                this.setState({customerList: res.data});
            })
            .catch(err => {
                console.log(err);
                alert("Customers loading failed !! server may be down ..try starting the server and reload the page again");
            });
    }

    handleCreateGroup() {
        //Handle create group
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
                                data-target="#customerForm" onClick={this._resetNewCustomerForm.bind(this)}>New
                            Customer
                        </button>
                    </div>
                    <div className="col-sm-3">
                        <button type="button" className="btn btn-outline-primary btn-lg"
                                onClick={this.handleCreateGroup.bind(this)}>
                             Create a group ({this.state.selectedCustomers.length})
                        </button>
                    </div>
                </div>
                <br/>
                <DataTable columns={this.state.customerTable.columns} data={this.state.customerList}/>
                <CustomerForm newCustomer={this.state.customer}
                              isVisible={this.state.isFormVisible}
                              _handleNicChange={this._handleNicChange.bind(this)}
                              makeInvisible={this._makeNewCustomerFormInvisible}
                              _handleFirstNameChange={this._handleFirstNameChange.bind(this)}
                              _handleLastNameChange={this._handleLastNameChange.bind(this)}
                              _handleAgeChange={this._handleAgeChange.bind(this)}
                              _handleBirthdayChange={this._handleBirthdayChange.bind(this)}
                              _handleAddress1Change={this._handleAddress1Change.bind(this)}
                              _handleAddress2Change={this._handleAddress2Change.bind(this)}
                              _handleContactNo1Change={this._handleContactNo1Change.bind(this)}
                              _handleContactNo2Change={this._handleContactNo2Change.bind(this)}
                              _handleGenderChange={this._handleGenderChange.bind(this)}
                              _handleMarriedSingleChange={this._handleMarriedSingleChange.bind(this)}
                />
            </div>
        );
    }
}

if (document.getElementById('customer-page')) {
    ReactDOM.render(<CustomersPage/>, document.getElementById('customer-page'));
}
