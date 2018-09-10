import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";

export default class CustomerPage extends Component {
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

if (document.getElementById('customer-page')) {
    ReactDOM.render(<CustomerPage/>, document.getElementById('customer-page'));
}
