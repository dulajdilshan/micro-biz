import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import Form from "../Form";

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
            newLoan: {
                branch_id: '', center_id: '', nic: '',
            }
        }
    }

    handleOnSubmit() {
        console.log("Loan Form Submitting ..")
    }

    render() {
        const newLoanFormStructure = [
            [{
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
                pattern: "^[A-Za-z]+$",
                message: "Numeric Only",
                value: this.state.newLoan.center_id,
                onChange: (event) =>
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {center_id: event.target.value})
                    }),
            }, {
                label: "NIC",
                id: "nic",
                name: "nic",
                required: true,
                pattern: "^[A-Za-z]+$",
                message: "invalid",
                value: this.state.newLoan.nic,
                onChange: (event) =>
                    this.setState({
                        newLoan: Object.assign({}, this.state.newLoan, {nic: event.target.value})
                    }),
            }, {
                button: true,
                label: "Calculate",
                id: "calculate",
                name: "calculate",
                onClick: (event) => console.log(event)
            }]
        ];
        return (
            <div className="container">
                <button type="button" className="btn btn-secondary btn-lg" data-toggle="modal"
                        data-target="#newLoanForm">New Loan
                </button>
                <br/>
                <br/>
                <DataTable columns={this.state.loanTable.columns} data={this.state.loanTable.dummyLoanTableData}/>
                <Form name="newLoanForm" title="Add Loan" rows={newLoanFormStructure}
                      handleOnSubmit={this.handleOnSubmit.bind(this)}/>
            </div>
        );
    }
}

if (document.getElementById('loans-page')) {
    ReactDOM.render(<LoansPage/>, document.getElementById('loans-page'));
}
