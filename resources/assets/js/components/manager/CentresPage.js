import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";

export default class CentresPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            centerTable: {
                columns: [
                    {Header: 'Branch ID', accessor: 'branch_id'},
                    {Header: 'Center Code', accessor: 'center_code'},
                    {Header: 'Center Name', accessor: 'center_name'},
                    {Header: 'Options', accessor: 'options'},
                ],
            },
            dummyCenterTableData: [
                {
                    branch_id: 0,
                    center_code: "we3",
                    center_name: 'Yakkala',
                    options: '~~~~~~'
                },
            ]
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <button className="btn btn-secondary btn-lg"> New Centre</button>
                    </div>
                </div>
                <br/>
                <DataTable columns={this.state.centerTable.columns} data={this.state.dummyCenterTableData}/>
            </div>
        );
    }
}

if (document.getElementById('centres-page')) {
    ReactDOM.render(<CentresPage/>, document.getElementById('centres-page'));
}
