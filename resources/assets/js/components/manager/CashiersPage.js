import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";

export default class CashiersPage extends Component {
    render() {
        return(
            <div className="container">
                <button className="btn btn-purple"> New Cashier</button>
                <br/>
                <br/>
                <DataTable/>
            </div>
        );
    }
}

if (document.getElementById('cashiers-page')) {
    ReactDOM.render(<CashiersPage/>, document.getElementById('cashiers-page'));
}
