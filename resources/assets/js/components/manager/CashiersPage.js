import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import Form from "../Form";
import axios from "axios";

export default class CashiersPage extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            newCashier: {
                branch_id: '',
                user_id: 0,
                center_id: '',
                full_name: '',
                nic: '',
                gs_division: '',
                birthday: '',
                age: '',
                contact_no: '',
                address: '',
            }
        };
        this.state = {
            cashierTable: {
                columns: [
                    {Header: 'Full Name', accessor: 'full_name'},
                    {Header: 'NIC', accessor: 'nic'},
                    {Header: 'Contact No', accessor: 'contact_no'},
                    {Header: 'Center ID', accessor: 'center_id'},
                    {Header: 'Options', accessor: 'options'},
                ],
                dummyCashierTableData: [
                    {full_name: 'Dulaj Dilshan', nic: '95113247v', contact_no: '0710889867', center_id: 3}
                ],
            },
            cashierTableData: [],
            newCashier: {
                branch_id: '',
                user_id: 0,
                center_id: '',
                full_name: '',
                nic: '',
                gs_division: '',
                birthday: '',
                age: '',
                contact_no: '',
                address: '',
            }
        }
    }

    componentDidMount() {
        axios.get('/api/cashiers')
            .then(res => {
                this.setState({cashierTableData: res.data});
            })
            .catch(err => {
                console.log(err);
                alert("Cashiers loading failed !! server may be down ..try starting the server and reload the page again");
            });
    }

    handleOnSubmit(event) {
        event.preventDefault();       //This makes not to load again
        let retConfirm = confirm('Are you sure you want to add this Cashier?');
        if (retConfirm) {
            $('#newCashierForm').modal('hide');
            console.log(this.state.newCashier);
            axios.post('/api/cashier/create', this.state.newCashier)
                .then(res => {
                    // alert(res.data);
                    console.log(res.data);
                    window.location.reload();
                })
                .catch(error => alert("[ FAILED ] Cashier NOT Added"));
        } else {
            alert("[ FAILED ] Cashier NOT Added");
        }
    }

    render() {
        const newCashierFormStructure = [
            [{
                label: "Branch ID",
                id: "branch_id",
                name: "branch_id",
                required: true,
                pattern: "^[0-9]+$",
                message: "Numeric Only",
                value: this.state.newCashier.branch_id,
                onChange: (event) =>
                    this.setState({
                        newCashier: Object.assign({}, this.state.newCashier, {branch_id: event.target.value})
                    }),
            }, {
                label: "Center ID",
                id: "center_id",
                name: "center_id",
                required: true,
                pattern: "^[0-9]+$",
                message: "Numeric Only",
                value: this.state.newCashier.center_id,
                onChange: (event) =>
                    this.setState({
                        newCashier: Object.assign({}, this.state.newCashier, {center_id: event.target.value})
                    }),
            }, {
                label: "GS Division",
                id: "gs_division",
                name: "gs_division",
                required: true,
                colSize: '3',
                pattern: "^[a-zA-Z0-9]+$",
                message: "Alphabet letters and number sonly",
                value: this.state.newCashier.gs_division,
                onChange: (event) =>
                    this.setState({
                        newCashier: Object.assign({}, this.state.newCashier, {gs_division: event.target.value})
                    }),
            }], [{
                label: "NIC",
                id: "nic",
                name: "nic",
                colSize: '3',
                required: true,
                pattern: "[0-9]{9}[x|X|v|V]$",
                message: "Should be in NIC pattern",
                value: this.state.newCashier.nic,
                onChange: (event) =>
                    this.setState({
                        newCashier: Object.assign({}, this.state.newCashier, {nic: event.target.value})
                    }),
            }, {
                label: "Full Name",
                id: "full_name",
                name: "full_name",
                required: true,
                colSize: '6',
                pattern: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
                message: "Alphabetic letters and space only",
                value: this.state.newCashier.full_name,
                onChange: (event) =>
                    this.setState({
                        newCashier: Object.assign({}, this.state.newCashier, {full_name: event.target.value})
                    }),
            }, {
                label: "Contact No",
                id: "contact_no",
                name: "contact_no",
                required: true,
                colSize: '3',
                pattern: "^(([+]{1}[0-9]{2}|0)[0-9]{9})$",
                message: "number only",
                value: this.state.newCashier.contact_no,
                onChange: (event) =>
                    this.setState({
                        newCashier: Object.assign({}, this.state.newCashier, {contact_no: event.target.value})
                    }),
            }
            ], [{
                label: "Birthday",
                id: "birthday",
                name: "birthday",
                required: true,
                type: 'date',
                colSize: '3',
                pattern: "^(([+]{1}[0-9]{2}|0)[0-9]{9})$",
                message: "Date format not valid",
                value: this.state.newCashier.birthday,
                onChange: (event) =>
                    this.setState({
                        newCashier: Object.assign({}, this.state.newCashier, {birthday: event.target.value})
                    }),
            }, {
                label: "Age",
                id: "age",
                name: "age",
                required: true,
                type: 'number',
                colSize: '2',
                pattern: "^[0-9]*$",
                message: "Age is not valid",
                value: this.state.newCashier.age,
                onChange: (event) =>
                    this.setState({
                        newCashier: Object.assign({}, this.state.newCashier, {age: event.target.value})
                    }),
            }, {
                label: "Address",
                id: "address",
                name: "address",
                required: true,
                colSize: '7',
                pattern: "^.{3,}$",
                message: "Invalid Address",
                value: this.state.newCashier.address,
                onChange: (event) =>
                    this.setState({
                        newCashier: Object.assign({}, this.state.newCashier, {address: event.target.value})
                    }),
            }]
        ];
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <button className="btn btn-secondary btn-lg" data-toggle="modal"
                                data-target="#newCashierForm"
                                onClick={() => this.setState({newCashier: this.initialState.newCashier})}> New Cashier
                        </button>
                    </div>
                </div>
                <br/>
                <DataTable columns={this.state.cashierTable.columns} data={this.state.cashierTableData}/>
                <Form name="newCashierForm" title="Add Cashier" rows={newCashierFormStructure}
                      handleOnSubmit={this.handleOnSubmit.bind(this)}/>
            </div>
        );
    }
}

if (document.getElementById('cashiers-page')) {
    ReactDOM.render(<CashiersPage/>, document.getElementById('cashiers-page'));
}
