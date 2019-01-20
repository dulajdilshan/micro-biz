import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";

export default class CentresPage extends Component {
    render() {
        return(
            <div className="container">
                <button className="btn btn-purple"> New Centre</button>
                <br/>
                <br/>
                <DataTable/>
            </div>
        );
    }
}

if (document.getElementById('centres-page')) {
    ReactDOM.render(<CentresPage/>, document.getElementById('centres-page'));
}
