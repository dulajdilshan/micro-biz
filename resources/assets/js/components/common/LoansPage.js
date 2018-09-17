import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import LoanForm from "../LoanForm";

export default class LoansPage extends Component {
    render() {
        return(
            <div className="container">
                <button type="button" className="btn btn-secondary btn-lg" data-toggle="modal"
                        data-target="#newLoanForm">New Loan
                </button>
                <br/>
                <br/>
                <DataTable/>
                <LoanForm/>
            </div>
        );
    }
}

if (document.getElementById('loans-page')) {
    ReactDOM.render(<LoansPage/>, document.getElementById('loans-page'));
}
