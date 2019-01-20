import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import Form from "../Form";

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
        const newCenterFormStructure = [
            [{
                label: "Branch ID",
                id: "branch_id",
                name: "branch_id",
                required: true,
                pattern: "^[0-9]+$",
                message: "Numeric Only",
                value: this.state.center.branch_id,
                onChange: () => console.log('typing..'),
            },{
                label: "Center Code",
                id: "center_code",
                name: "center_code",
                required: true,
                pattern: "^[0-9]+$",
                message: "Numeric Only",
                value: this.state.center.center_code,
                onChange: () => console.log('typing..'),
            },{
                label: "Center Name",
                id: "center_name",
                name: "center_name",
                required: true,
                pattern: "^[A-Za-z]+$",
                message: "invalid",
                value: this.state.center.center_name,
                onChange: () => console.log('typing..'),
            }],
        ];
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <button className="btn btn-secondary btn-lg" data-toggle="modal"
                                data-target="#newCenterForm"> New Centre
                        </button>
                    </div>
                </div>
                <br/>
                <DataTable columns={this.state.centerTable.columns} data={this.state.dummyCenterTableData}/>
                <Form name="newCenterForm" title="Add Center"/>
            </div>
        );
    }
}

if (document.getElementById('centres-page')) {
    ReactDOM.render(<CentresPage/>, document.getElementById('centres-page'));
}
