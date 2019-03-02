import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import Form from "../Form";
import axios from "axios";

export default class BranchesPage extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            newBranch: {
                // index: this.state.nextBranchIndex,
                // branch_no: this.state.nextBranchNo,
                code: '',
                name: '',
                town: ''
            }
        };
        this.state = {
            initialNewBranch: {
                index: '',
                branch_no: '',
                code: '',
                name: '',
                town: ''
            },
            newBranch: {
                index: '',
                branch_no: '',
                code: '',
                name: '',
                town: ''
            },
            branchTable: {
                columns: [
                    {Header: 'Branch NO', accessor: 'branch_no'},
                    {Header: 'Branch ID', accessor: 'id'},
                    {Header: 'Branch Code', accessor: 'code'},
                    {Header: 'Branch Name', accessor: 'name'},
                    {Header: 'Town', accessor: 'town'},
                ]
            },
            nextBranchIndex: '',
            nextBranchNo: '',
            branchTableData: []
        };
    }

    componentDidMount() {
        axios.get('/api/branches')
            .then(res => {
                let next = (res.data.length + 1).toString();
                let nextIndex = next.length >= 2 ? next : '0' + next;
                this.setState({
                    branchTableData: res.data,
                    initialNewBranch: Object.assign({}, this.state.initialNewBranch,
                        {index: nextIndex, branch_no: 'RB' + nextIndex}),
                    newBranch: Object.assign({}, this.state.newBranch,
                        {index: nextIndex, branch_no: 'RB' + nextIndex})
                });
            })
            .catch(err => {
                console.log(err);
                alert("Branches loading failed !! server may be down ..try starting the server and reload the page again");
            });
    }

    handleOnSubmit(event) {
        event.preventDefault();       //This makes not to load again
        return 0;
    }

    render() {
        const newBranchFormStructure = [
            [{
                label: "Branch Index",
                id: "index",
                name: "index",
                required: true,
                disabled: true,
                pattern: "^[0-9]+$",
                message: "Numeric Only",
                value: this.state.newBranch.index,
            }, {
                label: "Branch No",
                id: "branch_no",
                name: "branch_no",
                disabled: true,
                required: true,
                pattern: "^[0-9]+$",
                message: "Numeric Only",
                value: this.state.newBranch.branch_no,
            }], [{
                label: "Code",
                id: "code",
                name: "code",
                required: true,
                pattern: "^[A-Za-z]+$",
                message: "Alphabetic Letters Only",
                value: this.state.newBranch.code,
                onChange: (event) =>
                    this.setState({
                        newBranch: Object.assign({}, this.state.newBranch, {code: event.target.value})
                    }),
            }, {
                label: "Name of the Branch",
                id: "name",
                name: "name",
                required: true,
                pattern: "^[A-Za-z]+$",
                message: "Alphabetic letters only",
                value: this.state.newBranch.name,
                onChange: (event) =>
                    this.setState({
                        newBranch: Object.assign({}, this.state.newBranch, {name: event.target.value})
                    }),
            }, {
                label: "Town",
                id: "town",
                name: "town",
                required: true,
                pattern: "^[A-Za-z]+$",
                message: "Alphabetic letters only",
                value: this.state.newBranch.town,
                onChange: (event) =>
                    this.setState({
                        newBranch: Object.assign({}, this.state.newBranch, {town: event.target.value})
                    }),
            }]
        ];
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <button className="btn btn-secondary btn-lg" data-toggle="modal"
                                data-target="#newBranchForm"
                                onClick={() => this.setState({newBranch: this.state.initialNewBranch})}> New Branch
                        </button>
                    </div>
                </div>
                <br/>
                <DataTable columns={this.state.branchTable.columns} data={this.state.branchTableData}/>
                <Form name="newBranchForm" title="Add Branch" rows={newBranchFormStructure}
                      handleOnSubmit={this.handleOnSubmit.bind(this)}/>
            </div>
        );
    }
}

if (document.getElementById('branches-page')) {
    ReactDOM.render(<BranchesPage/>, document.getElementById('branches-page'));
}