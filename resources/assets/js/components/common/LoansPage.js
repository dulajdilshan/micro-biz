import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import Form from "../Form";
import axios from "axios";
import {round} from "lodash";

export default class LoansPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loanTable: {
                columns: [
                    {Header: 'Loan Number', accessor: 'loan_number'},
                    {Header: 'NIC', accessor: 'nic'},
                    {Header: 'Name', accessor: 'customer_name'},
                    {Header: 'Loan Amount', accessor: 'loan_amount'},
                    {Header: 'Rate', accessor: 'rate'},
                    {Header: 'Net Amount', accessor: 'net_amount'},
                    {Header: 'No. of Weeks', accessor: 'weeks'},
                    {Header: 'Balance', accessor: 'balance'},
                ],
                dummyLoanTableData: [
                    {
                        loan_number: 'R01/01/001',
                        nic: '95113247v',
                        customer_name: 'Dulaj Dilshan',
                        loan_amount: 154000,
                        rate: 2,
                        net_amount: 200000,
                        weeks: 3,
                        balance: 34500
                    }
                ],
            },
            customerList: [],
            loanList: [],
            newLoan: {
                customer_id: '',
                obtained_date: '',
                user_id: '',
                branch_id: '',
                center_id: '',
                nic: '',
                customer_name: '',
                group_id: '',
                loan_amount: '',
                weeks: '',
                rate: '',
                net_amount: '',
                weekly_installment: '',
                total_interest: '',
                loan_number: ''
            }
        }
    }

    componentDidMount() {
        axios.get('/api/loans')
            .then(res => {
                this.setState({loanList: res.data});
            })
            .catch(err => {
                console.log(err);
                alert("Loans loading failed !! server may be down ..try starting the server and reload the page again");
            })
            .then(() => axios.get('/api/customer/get-no-loans')
                .then(res => {
                    let list = res.data;
                    let cusList = [];
                    for (let cus in list) {
                        let c = {};
                        c.value = list[cus].nic;
                        c.full_name = list[cus].full_name;
                        c.group_id = list[cus].group_id;
                        cusList.push(c);
                    }
                    return cusList;})
                .then((cusList)=>this.setState({customerList: cusList}))
                .catch(err => {
                    console.log(err);
                    alert("Customers loading failed !! server may be down ..try starting the server and reload the page again");
                }));
    }

    handleOnSubmit() {
        console.log("Loan Form Submitting ..")
    }

    render() {
        const newLoanFormStructure = [
            [{
                label: "Date",
                id: "obtained_date",
                name: "obtained_date",
                required: true,
                type: 'date',
                pattern: "^(([+]{1}[0-9]{2}|0)[0-9]{9})$",
                message: "Dates Only",
                value: this.state.newLoan.obtained_date,
                onChange: (event) =>
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {obtained_date: event.target.value})
                    }),
            }, {
                label: "Branch ID",
                id: "branch_id",
                name: "branch_id",
                required: true,
                pattern: "^[0-9]+$",
                message: "Numeric Only",
                value: this.state.newLoan.branch_id,
                onChange: (event) =>
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {branch_id: event.target.value})
                    }),
            }, {
                label: "Center ID",
                id: "center_id",
                name: "center_id",
                required: true,
                pattern: "^[0-9]+$",
                message: "Numeric Only",
                value: this.state.newLoan.center_id,
                onChange: (event) =>
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {center_id: event.target.value})
                    }),
            }, {
                label: "USER ID",
                id: "user_id",
                name: "user_id",
                required: true,
                pattern: "^[0-9]+$",
                message: "Numbers Only",
                value: this.state.newLoan.user_id,
                onChange: (event) =>
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {user_id: event.target.value})
                    }),
            }], [{
                label: "NIC",
                id: "nic",
                name: "nic",
                required: true,
                select: true,
                options:this.state.customerList,
                // pattern: "^[0-9]{9}[x|X|v|V]$",
                message: "NIC Only",
                value: this.state.newLoan.nic,
                onChange: (event) =>
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {nic: event.target.value})
                    }),
            }, {
                label: "Customer Name",
                id: "customer_name",
                name: "customer_name",
                required: true,
                colSize: 6,
                pattern: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
                message: "names only",
                value: this.state.newLoan.customer_name,
                onChange: (event) =>
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {customer_name: event.target.value})
                    }),
            }, {
                label: "Group ID",
                id: "group_id",
                name: "group_id",
                required: true,
                pattern: "^[0-9]+$",
                message: "Numbers Only",
                value: this.state.newLoan.group_id,
                onChange: (event) =>
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {group_id: event.target.value})
                    }),
            }], [{
                label: "Loan Amount",
                id: "loan_amount",
                name: "loan_amount",
                required: true,
                pattern: "^[0-9]+$",
                message: "Numbers Only",
                value: this.state.newLoan.loan_amount,
                onChange: (event) =>
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {loan_amount: event.target.value})
                    }),
            }, {
                label: "Weeks",
                id: "weeks",
                name: "weeks",
                required: true,
                type: 'number',
                pattern: "^[0-9]+$",
                message: "Numbers Only",
                value: this.state.newLoan.weeks,
                onChange: (event) =>
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {weeks: event.target.value})
                    }),
            }, {
                label: "Interest Rate",
                id: "rate",
                name: "rate",
                required: true,
                pattern: "[-+]?[0-9]*\.?[0-9]*",
                message: "Should be a integer number or decimal number",
                value: this.state.newLoan.rate,
                onChange: (event) =>
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {rate: event.target.value})
                    }),
            }, {
                button: true,
                label: "Calculate",
                id: "calculate",
                name: "calculate",
                onClick: (event) => {
                    let loan = this.state.newLoan.loan_amount === '' ? 0 : this.state.newLoan.loan_amount;
                    let irate = (this.state.newLoan.rate === '' ? 0 : this.state.newLoan.rate) / 100;
                    let no_of_weeks = this.state.newLoan.weeks === '' ? 0 : this.state.newLoan.weeks;
                    let interest = loan * irate * no_of_weeks;
                    let net = parseInt(loan) + parseInt(interest);
                    let weekly_in = round(net / no_of_weeks);
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {
                            net_amount: net, weekly_installment: weekly_in, total_interest: interest
                        })
                    })
                }
            }], [{
                label: "Net Amount",
                id: "net_amount",
                name: "net_amount",
                required: true,
                pattern: "^[0-9]+$",
                disabled: true,
                message: "Numbers Only",
                value: this.state.newLoan.net_amount,
                onChange: (event) =>
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {net_amount: event.target.value})
                    }),
            }, {
                label: "Weekly Installment",
                id: "weekly_installment",
                name: "weekly_installment",
                required: true,
                disabled: true,
                pattern: "^[0-9]+$",
                message: "Numbers Only",
                value: this.state.newLoan.weekly_installment,
                onChange: (event) =>
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {weekly_installment: event.target.value})
                    }),
            }, {
                label: "Total Interest",
                id: "total_interest",
                name: "total_interest",
                required: true,
                disabled: true,
                pattern: "^[0-9]+$",
                message: "Numbers Only",
                value: this.state.newLoan.total_interest,
                onChange: (event) =>
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {total_interest: event.target.value})
                    }),
            }, {
                button: true,
                label: "RESET",
                id: "reset",
                name: "reset",
                onClick: (event) => this.setState({
                    newLoan: Object.assign({}, this.state.newLoan, {
                        loan_amount: '', weeks: '', rate: '', net_amount: '', weekly_installment: '', total_interest: ''
                    })
                })
            }], [{
                label: "Loan number",
                id: "loan_number",
                name: "loan_number",
                required: true,
                pattern: "^[0-9]+$",
                message: "Numbers Only",
                value: this.state.newLoan.loan_number,
                onChange: (event) =>
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {loan_number: event.target.value})
                    }),
            }, {
                button: true,
                label: "Generate Loan Number",
                id: "generate_loan_num",
                name: "generate_loan_num",
                onClick: (event) => {
                    if (this.state.newLoan.branch_id !== '' &&
                        this.state.newLoan.center_id !== '' &&
                        this.state.newLoan.customer_id !== '') {
                        let l_number = this.state.newLoan.branch_id +
                            '/' + this.state.newLoan.center_id
                            + '/' + this.state.newLoan.customer_id;
                        this.setState({newLoan: Object.assign({}, this.state.newLoan, {loan_number: l_number})});
                    } else {
                        alert("Branch ID, Center ID or Customer ID not found")
                    }

                }
            }]
        ];
        return (
            <div className="container">
                <button type="button" className="btn btn-secondary btn-lg" data-toggle="modal"
                        data-target="#newLoanForm">New Loan
                </button>
                <br/>
                <br/>
                <DataTable columns={this.state.loanTable.columns} data={this.state.loanList}/>
                <Form name="newLoanForm" title="Add Loan" rows={newLoanFormStructure}
                      handleOnSubmit={this.handleOnSubmit.bind(this)}/>
            </div>
        );
    }
}

if (document.getElementById('loans-page')) {
    ReactDOM.render(<LoansPage/>, document.getElementById('loans-page'));
}
