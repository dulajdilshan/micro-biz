import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import Form from "../Form";
import axios from "axios";

export default class BranchesPage extends Component {
    constructor(props) {
        super(props);
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
            editBranch: {index: '', branch_no: '', code: '', name: '', town: ''},
            selectedBranch: {index: '', branch_no: '', code: '', name: '', town: ''},
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

    handleDeleteOnClick() {
        //event.preventDefault();       //This makes not to load again
        let retConfirm = confirm('Are you sure you want to delete this Branch?');
        if (retConfirm) {
            $('#editBranchForm').modal('hide');
            console.log(this.state.editBranch.id);
            axios.delete('/api/branch/delete/'.concat(this.state.editBranch.id))
                .then(res => {
                    alert(res.statusText);
                    console.log(res.data);
                    window.location.reload();
                })
                .catch(error => alert("[ FAILED ] Branch NOT Deleted"));
        } else {
            alert("[ FAILED ] Branch NOT Deleted");
        }
    }

    handleEditOnSubmit(event) {
        event.preventDefault();       //This makes not to load again
        let retConfirm = confirm('Are you sure you want to Save this Branch?');
        if (retConfirm) {
            $('#editBranchForm').modal('hide');
            console.log(this.state.editBranch);
            axios.post('/api/branch/edit', this.state.editBranch)
                .then(res => {
                    alert(res.statusText);
                    console.log(res.data);
                    window.location.reload();
                })
                .catch(error => alert("[ FAILED ] Branch NOT Saved"));
        } else {
            alert("[ FAILED ] Branch NOT saved");
        }
    }

    handleAddOnSubmit(event) {
        event.preventDefault();       //This makes not to load again
        let retConfirm = confirm('Are you sure you want to add this Branch?');
        if (retConfirm) {
            $('#newBranchForm').modal('hide');
            console.log(this.state.newBranch);
            axios.post('/api/branch/create', this.state.newBranch)
                .then(res => {
                    alert(res.statusText);
                    console.log(res.data);
                    window.location.reload();
                })
                .catch(error => alert("[ FAILED ] Branch NOT Added"));
        } else {
            alert("[ FAILED ] Branch NOT Added");
        }
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
                pattern: "^[A-Za-z]{4}$",
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
        const editBranchFormStructure = [
            [{
                label: "Branch Index",
                id: "index",
                name: "index",
                required: true,
                disabled: true,
                // pattern: "^[0-9]{2}$",
                message: "Numeric Only",
                value: this.state.editBranch.index,
            }, {
                label: "Branch No",
                id: "branch_no",
                name: "branch_no",
                disabled: true,
                required: true,
                // pattern: "^RB[0-9]{4}+$",
                message: "Numeric Only",
                value: this.state.editBranch.branch_no,
            }], [{
                label: "Code",
                id: "code",
                name: "code",
                required: true,
                pattern: "^[A-Za-z]{4}$",
                message: "Alphabetic Letters Only",
                value: this.state.editBranch.code,
                onChange: (event) =>
                    this.setState({
                        editBranch: Object.assign({}, this.state.editBranch, {code: event.target.value})
                    }),
            }, {
                label: "Name of the Branch",
                id: "name",
                name: "name",
                required: true,
                pattern: "^[A-Za-z]+$",
                message: "Alphabetic letters only",
                value: this.state.editBranch.name,
                onChange: (event) =>
                    this.setState({
                        editBranch: Object.assign({}, this.state.editBranch, {name: event.target.value})
                    }),
            }, {
                label: "Town",
                id: "town",
                name: "town",
                required: true,
                pattern: "^[A-Za-z]+$",
                message: "Alphabetic letters only",
                value: this.state.editBranch.town,
                onChange: (event) =>
                    this.setState({
                        editBranch: Object.assign({}, this.state.editBranch, {town: event.target.value})
                    }),
            }], [{
                button: true,
                label: "Delete",
                id: "delete",
                name: "delete",
                onClick: this.handleDeleteOnClick.bind(this)
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
                    <div className="col-sm-3">
                        <button className="btn btn-info btn-lg" disabled={this.state.selectedBranch.index === ''}
                                data-toggle="modal"
                                data-target="#editBranchForm"
                                onClick={() => this.setState({editBranch: this.state.selectedBranch})}>Edit Branch
                        </button>
                    </div>
                </div>
                <br/>
                <DataTable columns={this.state.branchTable.columns} data={this.state.branchTableData}
                           rowOnClick={(rowInfo) => this.setState({selectedBranch: rowInfo._original})}/>
                <Form name="newBranchForm" title="Add Branch" rows={newBranchFormStructure}
                      handleOnSubmit={this.handleAddOnSubmit.bind(this)}/>
                <Form name="editBranchForm" title="Edit Branch" rows={editBranchFormStructure}
                      handleOnSubmit={this.handleEditOnSubmit.bind(this)} submitButtonName="SAVE"/>
            </div>
        );
    }
}

if (document.getElementById('branches-page')) {
    ReactDOM.render(<BranchesPage/>, document.getElementById('branches-page'));
}