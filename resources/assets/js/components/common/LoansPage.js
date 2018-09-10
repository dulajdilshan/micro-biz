import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";

export default class LoansPage extends Component {
    render() {
        return(
            <div className="container">
                <button className="btn btn-purple"> New Loan</button>
                <br/>
                <br/>
                <DataTable/>
            </div>
        );
    }
}

if (document.getElementById('loans-page')) {
    ReactDOM.render(<LoansPage/>, document.getElementById('loans-page'));
}
