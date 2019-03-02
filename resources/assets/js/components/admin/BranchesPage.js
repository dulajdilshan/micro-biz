import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import Form from "../Form";
import axios from "axios";

export default class BranchesPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Hi im here");
        return (
            <div className="container">
                <div className="row">
                    <h1>This is Branches Page</h1>
                </div>
            </div>
        );
    }
}

if (document.getElementById('branches-page')) {
    ReactDOM.render(<BranchesPage/>, document.getElementById('branches-page'));
}