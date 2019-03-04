import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import Form from "../Form";
import axios from "axios";

export default class CustomersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialNewCustomer: {
                branch_name: '', branch_id: '', center_id: '', center_no: '', branch_no: '', customer_no: '',
                name_initials: '', index: '', gs_division_name: '',
                nic: '', first_name: '', last_name: '', birthday: '',
                age: '', gender: 'male', married: 0, phone1: '', phone2: '',
                address_1: '', address_2: '', id: ''
            },
            newCustomer: {},
            editCustomer: {},
            selectedCustomer: {
                branch_name: '', branch_id: '', center_id: '', center_no: '', branch_no: '', customer_no: '',
                name_initials: '', index: '', gs_division_name: '',
                nic: '', first_name: '', last_name: '', birthday: '',
                age: '', gender: 'male', married: 0, phone1: '', phone2: '',
                address_1: '', address_2: '', id: ''
            },
            customers: [],
            customerTableData: [{
                fullName: 'Jodha Akbar',
                nic: '956722345v',
                groupNumber: 3,
                loanNumber: 2,
                loanAmount: 23000,
                weeklyPayment: 21300,
                phoneNumber: '0712345678'
            }],
            customerTable: {
                columns: [
                    {Header: 'Name', accessor: 'full_name'},
                    {Header: 'NIC', accessor: 'nic'},
                    {Header: 'Group No', accessor: 'group_index'},
                    {Header: 'Center Name', accessor: 'center_name'},
                    {Header: 'Branch Name', accessor: 'branch_name'},
                    {Header: 'GS Division', accessor: 'gs_division_name'},
                    {Header: 'Loan Active ?', accessor: 'has_active_loan'},
                ]
            },

            branchList: [{branch_id: 0, branch_name: "000", branch_no: "000", value: "<- Select ->"}],
            centerList: [],
            initialCenterList: [{center_id: 0, center_name: "000", center_no: "000", value: "<- Select ->"}],
            centerListBuffer: []
        }
    }

    setCustomerTableData(res) {
        this.setState({customerTableData: res.data});
    };

    setBranchList(res) {
        this.setState({branchList: this.state.branchList.concat(res.data)})
    }

    setCenterListBuffer(res) {
        this.setState({centerListBuffer: res.data})
    }

    loadData(url, successCallBack, dataName) {
        return (axios.get(url)
            .then(successCallBack)
            .catch(err => {
                console.log(err);
                alert(dataName + " loading failed !! Try reloading the page again");
            }));
    }

    componentDidMount() {
        this.loadData('/api/customers', this.setCustomerTableData.bind(this), 'Customers');
        this.loadData('/api/branch/get-customer-branches', this.setBranchList.bind(this), 'Branches');
        this.loadData('/api/center/get-customer-centers', this.setCenterListBuffer.bind(this), 'Centers');
    }

    handleAddOnSubmit(event) {
        event.preventDefault();    //This makes not to load again
        let retConfirm = confirm('Are you sure you want to add this Customer?');
        if (retConfirm) {
            $('#newCustomerForm').modal('hide');
            console.log(this.state.newCustomer);
            axios.post('/api/customer/create', this.state.newCustomer)
                .then(res => {
                    alert(res.data);
                    console.log(res.data);
                    window.location.reload();
                })
                .catch(error => alert("[ FAILED ] Customer NOT Added"));
        } else {
            alert("[ FAILED ] Customer NOT Added");
        }
    }

    handleEditOnSubmit(event) {
        event.preventDefault();    //This makes not to load again
        let retConfirm = confirm('Are you sure you want to save this Customer?');
        if (retConfirm) {
            $('#editCustomerForm').modal('hide');
            console.log(this.state.editCustomer);
            axios.post('/api/customer/edit', this.state.editCustomer)
                .then(res => {
                    alert(res.data);
                    console.log(res.data);
                    window.location.reload();
                })
                .catch(error => alert("[ FAILED ] Customer NOT Saved"));
        } else {
            alert("[ FAILED ] Customer NOT Saved");
        }
    }

    handleDeleteOnClick() {
        //event.preventDefault();       //This makes not to load again
        let retConfirm = confirm('Are you sure you want to delete this Customer?');
        if (retConfirm) {
            $('#editCustomerForm').modal('hide');
            console.log(this.state.editCustomer.id);
            axios.delete('/api/customer/delete/'.concat(this.state.editCustomer.id))
                .then(res => {
                    alert(res.statusText);
                    console.log(res.data);
                    window.location.reload();
                })
                .catch(error => alert("[ FAILED ] Customer NOT Deleted"));
        } else {
            alert("[ FAILED ] Customer NOT Deleted");
        }
    }

    render() {
        const newCustomerFormStructure = [
            [{
                label: "Branch Name",
                id: "branch_name",
                name: "branch_name",
                required: true,
                aselect: true,
                colSize: 3,
                options: this.state.branchList,
                pattern: "^[A-Za-z]+$",
                message: "Strings Only",
                value: this.state.newCustomer.branch_id,
                onChange: (event) => {
                    let branch = this.state.branchList.filter(function (item) {
                        return item.id === parseInt(event.target.value);
                    })[0];
                    let centers = this.state.centerListBuffer.filter(function (item) {
                        return item.branch_id === parseInt(event.target.value);
                    });
                    this.setState({
                        centerList: this.state.initialCenterList.concat(centers),
                        newCustomer: Object.assign({}, this.state.newCustomer, {
                            branch_id: parseInt(event.target.value),
                            branch_name: branch ? branch.branch_name : '',
                            branch_no: branch ? branch.branch_no : '',
                            center_id: '',
                            center_name: '',
                            center_no: '',
                            customer_no: ''
                        })
                    })
                }
            }, {
                label: "Branch NO",
                id: "branch_no",
                name: "branch_no",
                required: true,
                colSize: 2,
                // pattern: "^RB[0-9]{4}$",
                disabled: true,
                // message: "Numeric Only",
                value: this.state.newCustomer.branch_no,
            }, {
                label: "Center Name",
                id: "center_name",
                name: "center_name",
                required: true,
                aselect: true,
                colSize: 3,
                options: this.state.centerList,
                pattern: "^[A-Za-z]+$",
                message: "Strings Only",
                value: this.state.newCustomer.center_id,
                onChange: (event) => {
                    let center = this.state.centerList.filter(function (item) {
                        return item.id === parseInt(event.target.value);
                    })[0];
                    this.setState({
                        newCustomer: Object.assign({}, this.state.newCustomer, {
                            center_id: parseInt(event.target.value),
                            center_name: center ? center.center_name : '',
                            center_no: center ? center.center_no : '',
                            index: center ? ('000' + parseInt(center.next_customer_index)).substr(-3) : '',
                            customer_no: center ? this.state.newCustomer.branch_no
                                + "/" + center.center_no
                                + "/" + ('000' + parseInt(center.next_customer_index)).substr(-3)
                                : '',
                        })
                    })
                }
            }, {
                label: "Center NO",
                id: "center_no",
                name: "center_no",
                required: true,
                colSize: 2,
                // pattern: "^RB[0-9]{4}$",
                disabled: true,
                // message: "Numeric Only",
                value: this.state.newCustomer.center_no,
            }], [{
                label: "Customer NO",
                id: "customer_no",
                name: "customer_no",
                required: true,
                colSize: 3,
                // pattern: "^RB[0-9]{4}$",
                disabled: true,
                // message: "Numeric Only",
                value: this.state.newCustomer.customer_no,
            }, {
                label: "NIC",
                id: "nic",
                name: "nic",
                colSize: '3',
                required: true,
                pattern: "[0-9]{9}[x|X|v|V]$",
                message: "Should be in NIC pattern",
                value: this.state.newCustomer.nic,
                onChange: (event) =>
                    this.setState({
                        newCustomer: Object.assign({}, this.state.newCustomer, {nic: event.target.value})
                    }),
            }, {
                label: "Grama Sevaka Division",
                id: "gs_division_name",
                name: "gs_division_name",
                required: true,
                colSize: 3,
                pattern: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
                message: "Alphabetic letters and space only",
                value: this.state.newCustomer.gs_division_name,
                onChange: (event) =>
                    this.setState({
                        newCustomer: Object.assign({}, this.state.newCustomer, {gs_division_name: event.target.value})
                    }),
            },], [{
                label: "Name Initials",
                id: "name_initials",
                name: "name_initials",
                required: true,
                colSize: 3,
                pattern: "^[A-Z]+$",
                message: "Capital Letters Only",
                value: this.state.newCustomer.name_initials,
                onChange: (event) =>
                    this.setState({
                        newCustomer: Object.assign({}, this.state.newCustomer, {name_initials: event.target.value})
                    }),
            }, {
                label: "First Name",
                id: "first_name",
                name: "first_name",
                required: true,
                colSize: 3,
                pattern: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
                message: "Alphabetic letters and space only",
                value: this.state.newCustomer.first_name,
                onChange: (event) =>
                    this.setState({
                        newCustomer: Object.assign({}, this.state.newCustomer, {first_name: event.target.value})
                    }),
            }, {
                label: "Last Name",
                id: "last_name",
                name: "last_name",
                required: true,
                colSize: 3,
                pattern: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
                message: "Alphabetic letters and space only",
                value: this.state.newCustomer.last_name,
                onChange: (event) =>
                    this.setState({
                        newCustomer: Object.assign({}, this.state.newCustomer, {last_name: event.target.value})
                    }),
            }, {
                label: "Birthday",
                id: "birthday",
                name: "birthday",
                required: true,
                type: 'date',
                colSize: 3,
                pattern: "^(([+]{1}[0-9]{2}|0)[0-9]{9})$",
                message: "Should be in Date Format",
                value: this.state.newCustomer.birthday,
                onChange: (event) =>
                    this.setState({
                        newCustomer: Object.assign({}, this.state.newCustomer, {birthday: event.target.value})
                    }),
            }], [{
                label: "Age",
                id: "age",
                name: "age",
                required: true,
                type: 'number',
                colSize: '2',
                pattern: "^[0-9]{2}$",
                message: "Numbers only",
                value: this.state.newCustomer.age,
                onChange: (event) =>
                    this.setState({
                        newCustomer: Object.assign({}, this.state.newCustomer, {age: event.target.value})
                    }),
            }, {
                label: "Gender",
                id: "gender",
                name: "gender",
                required: true,
                aselect: true,
                colSize: '2',
                options: [{id: 'male', value: 'Male'}, {id: 'female', value: 'Female'}],
                // pattern: "^[0-9]*$",
                // message: "Age is not valid",
                value: this.state.newCustomer.gender,
                onChange: (event) =>
                    this.setState({
                        newCustomer: Object.assign({}, this.state.newCustomer, {gender: event.target.value})
                    }),
            }, {
                label: "Married",
                id: "married",
                name: "married",
                required: true,
                aselect: true,
                colSize: '2',
                options: [{id: 0, value: 'No'}, {id: 1, value: 'Yes'}],
                // pattern: "^[0-9]*$",
                // message: "Age is not valid",
                value: this.state.newCustomer.married,
                onChange: (event) =>
                    this.setState({
                        newCustomer: Object.assign({}, this.state.newCustomer, {married: event.target.value})
                    }),
            }, {
                label: "Phone Number",
                id: "phone1",
                name: "phone1",
                required: true,
                colSize: 3,
                pattern: "^(([+]{1}[0-9]{2}|0)[0-9]{9})$",
                message: "Phone numbers format only",
                value: this.state.newCustomer.phone1,
                onChange: (event) =>
                    this.setState({
                        newCustomer: Object.assign({}, this.state.newCustomer, {phone1: event.target.value})
                    }),
            }, {
                label: "Mobile Number",
                id: "phone2",
                name: "phone2",
                required: true,
                colSize: 3,
                pattern: "^(([+]{1}[0-9]{2}|0)[0-9]{9})$",
                message: "Phone numbers format only",
                value: this.state.newCustomer.phone2,
                onChange: (event) =>
                    this.setState({
                        newCustomer: Object.assign({}, this.state.newCustomer, {phone2: event.target.value})
                    }),
            }], [{
                label: "Address 1",
                id: "address_1",
                name: "address_1",
                required: true,
                colSize: '6',
                pattern: "^.{3,}$",
                message: "Letters and numbers not less than 3 characters",
                value: this.state.newCustomer.address_1,
                onChange: (event) =>
                    this.setState({
                        newCustomer: Object.assign({}, this.state.newCustomer, {address_1: event.target.value})
                    }),
            }, {
                label: "Address 2",
                id: "address_2",
                name: "address_2",
                required: true,
                colSize: '6',
                pattern: "^.{3,}$",
                message: "Letters and numbers not less than 3 characters",
                value: this.state.newCustomer.address_2,
                onChange: (event) =>
                    this.setState({
                        newCustomer: Object.assign({}, this.state.newCustomer, {address_2: event.target.value})
                    }),
            }]
        ];
        const editCustomerFormStructure = [
            [{
                label: "Branch Name",
                id: "branch_name",
                name: "branch_name",
                colSize: 3,
                disabled: true,
                // pattern: "^[A-Za-z]+$",
                // message: "Strings Only",
                value: this.state.editCustomer.branch_name,
            }, {
                label: "Branch NO",
                id: "branch_no",
                name: "branch_no",
                colSize: 2,
                disabled: true,
                value: this.state.editCustomer.branch_no,
            }, {
                label: "Center Name",
                id: "center_name",
                name: "center_name",
                disabled: true,
                colSize: 3,
                value: this.state.editCustomer.center_name,
            }, {
                label: "Center NO",
                id: "center_no",
                name: "center_no",
                colSize: 2,
                disabled: true,
                value: this.state.editCustomer.center_no,
            }], [{
                label: "Customer NO",
                id: "customer_no",
                name: "customer_no",
                colSize: 3,
                disabled: true,
                value: this.state.editCustomer.customer_no,
            }, {
                label: "NIC",
                id: "nic",
                name: "nic",
                colSize: '3',
                required: true,
                pattern: "[0-9]{9}[x|X|v|V]$",
                message: "Should be in NIC pattern",
                value: this.state.editCustomer.nic,
                onChange: (event) =>
                    this.setState({
                        editCustomer: Object.assign({}, this.state.editCustomer, {nic: event.target.value})
                    }),
            }, {
                label: "Grama Sevaka Division",
                id: "gs_division_name",
                name: "gs_division_name",
                required: true,
                colSize: 3,
                pattern: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
                message: "Alphabetic letters and space only",
                value: this.state.editCustomer.gs_division_name,
                onChange: (event) =>
                    this.setState({
                        editCustomer: Object.assign({}, this.state.editCustomer, {gs_division_name: event.target.value})
                    }),
            }], [{
                label: "Name Initials",
                id: "name_initials",
                name: "name_initials",
                required: true,
                colSize: 3,
                pattern: "^[A-Z]+$",
                message: "Capital Letters Only",
                value: this.state.editCustomer.name_initials,
                onChange: (event) =>
                    this.setState({
                        editCustomer: Object.assign({}, this.state.editCustomer, {name_initials: event.target.value})
                    }),
            }, {
                label: "First Name",
                id: "first_name",
                name: "first_name",
                required: true,
                colSize: 3,
                pattern: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
                message: "Alphabetic letters and space only",
                value: this.state.editCustomer.first_name,
                onChange: (event) =>
                    this.setState({
                        editCustomer: Object.assign({}, this.state.editCustomer, {first_name: event.target.value})
                    }),
            }, {
                label: "Last Name",
                id: "last_name",
                name: "last_name",
                required: true,
                colSize: 3,
                pattern: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
                message: "Alphabetic letters and space only",
                value: this.state.editCustomer.last_name,
                onChange: (event) =>
                    this.setState({
                        editCustomer: Object.assign({}, this.state.editCustomer, {last_name: event.target.value})
                    }),
            }, {
                label: "Birthday",
                id: "birthday",
                name: "birthday",
                required: true,
                type: 'date',
                colSize: 3,
                pattern: "^(([+]{1}[0-9]{2}|0)[0-9]{9})$",
                message: "Should be in Date Format",
                value: this.state.editCustomer.birthday,
                onChange: (event) =>
                    this.setState({
                        editCustomer: Object.assign({}, this.state.editCustomer, {birthday: event.target.value})
                    }),
            }], [{
                label: "Age",
                id: "age",
                name: "age",
                required: true,
                type: 'number',
                colSize: '2',
                pattern: "^[0-9]{2}$",
                message: "Numbers only",
                value: this.state.editCustomer.age,
                onChange: (event) =>
                    this.setState({
                        editCustomer: Object.assign({}, this.state.editCustomer, {age: event.target.value})
                    }),
            }, {
                label: "Gender",
                id: "gender",
                name: "gender",
                required: true,
                aselect: true,
                colSize: '2',
                options: [{id: 'male', value: 'Male'}, {id: 'female', value: 'Female'}],
                // pattern: "^[0-9]*$",
                // message: "Age is not valid",
                value: this.state.editCustomer.gender,
                onChange: (event) =>
                    this.setState({
                        editCustomer: Object.assign({}, this.state.editCustomer, {gender: event.target.value})
                    }),
            }, {
                label: "Married",
                id: "married",
                name: "married",
                required: true,
                aselect: true,
                colSize: '2',
                options: [{id: 0, value: 'No'}, {id: 1, value: 'Yes'}],
                // pattern: "^[0-9]*$",
                // message: "Age is not valid",
                value: this.state.editCustomer.married,
                onChange: (event) =>
                    this.setState({
                        editCustomer: Object.assign({}, this.state.editCustomer, {married: event.target.value})
                    }),
            }, {
                label: "Phone Number",
                id: "phone1",
                name: "phone1",
                required: true,
                colSize: 3,
                pattern: "^(([+]{1}[0-9]{2}|0)[0-9]{9})$",
                message: "Phone numbers format only",
                value: this.state.editCustomer.phone1,
                onChange: (event) =>
                    this.setState({
                        editCustomer: Object.assign({}, this.state.editCustomer, {phone1: event.target.value})
                    }),
            }, {
                label: "Mobile Number",
                id: "phone2",
                name: "phone2",
                required: true,
                colSize: 3,
                pattern: "^(([+]{1}[0-9]{2}|0)[0-9]{9})$",
                message: "Phone numbers format only",
                value: this.state.editCustomer.phone2,
                onChange: (event) =>
                    this.setState({
                        editCustomer: Object.assign({}, this.state.editCustomer, {phone2: event.target.value})
                    }),
            }], [{
                label: "Address 1",
                id: "address_1",
                name: "address_1",
                required: true,
                colSize: '6',
                pattern: "^.{3,}$",
                message: "Letters and numbers not less than 3 characters",
                value: this.state.editCustomer.address_1,
                onChange: (event) =>
                    this.setState({
                        editCustomer: Object.assign({}, this.state.editCustomer, {address_1: event.target.value})
                    }),
            }, {
                label: "Address 2",
                id: "address_2",
                name: "address_2",
                required: true,
                colSize: '6',
                pattern: "^.{3,}$",
                message: "Letters and numbers not less than 3 characters",
                value: this.state.editCustomer.address_2,
                onChange: (event) =>
                    this.setState({
                        editCustomer: Object.assign({}, this.state.editCustomer, {address_2: event.target.value})
                    }),
            }], [{
                button: true,
                label: "Delete",
                id: "delete",
                name: "delete",
                onClick: this.handleDeleteOnClick.bind(this)
            }]
        ];
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <button className="btn btn-secondary btn-lg" data-toggle="modal"
                                data-target="#newCustomerForm"
                                onClick={() => this.setState({newCustomer: this.state.initialNewCustomer})}> New
                            Customer
                        </button>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-info btn-lg" disabled={this.state.selectedCustomer.index === ''}
                                data-toggle="modal"
                                data-target="#editCustomerForm"
                                onClick={() => this.setState({editCustomer: this.state.selectedCustomer})}>Edit Customer
                        </button>
                    </div>
                </div>
                <br/>
                <DataTable columns={this.state.customerTable.columns} data={this.state.customerTableData}
                           rowOnClick={(rowInfo) => this.setState({selectedCustomer: rowInfo._original})}/>
                <Form name="newCustomerForm" title="Add Customer" rows={newCustomerFormStructure}
                      handleOnSubmit={this.handleAddOnSubmit.bind(this)}/>
                <Form name="editCustomerForm" title="Edit Customer" rows={editCustomerFormStructure}
                      handleOnSubmit={this.handleEditOnSubmit.bind(this)} submitButtonName="SAVE"/>
            </div>
        );
    }
}

if (document.getElementById('admin-customers-page')) {
    ReactDOM.render(<CustomersPage/>, document.getElementById('admin-customers-page'));
}