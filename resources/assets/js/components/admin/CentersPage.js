import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import Form from "../Form";
import axios from "axios";

export default class CentersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialNewCenter: {branch_no: '', branch_name: '', index: '', branch_id: '', code: '', name: ''},
            newCenter: {branch_no: '', branch_name: '', index: '', branch_id: '', code: '', name: ''},
            editCenter: {id: '', branch_no: '', branch_name: '', index: '', branch_id: '', code: '', name: ''},
            selectedCenter: {id: '', branch_no: '', branch_name: '', index: '', branch_id: '', code: '', name: ''},
            branchList: [],
            centerTable: {
                columns: [
                    {Header: 'Center Index', accessor: 'index'},
                    {Header: 'Center Code', accessor: 'code'},
                    {Header: 'Center Name', accessor: 'name'},
                    {Header: 'Branch No', accessor: 'branch_no'},
                    {Header: 'Branch Name', accessor: 'branch_name'},
                ],
            },
            centerTableData: [],
            dummyCenterTableData: [
                {
                    branch_id: 0,
                    center_code: "we3",
                    center_name: 'Yakkala',
                    options: '~~~~~~'
                },
            ]
        };

    }

    componentDidMount() {
        axios.get('/api/centers')
            .then(res => {
                this.setState({centerTableData: res.data});
            })
            .catch(err => {
                console.log(err);
                alert("Centers loading failed !! server may be down ..try starting the server and reload the page again");
            })
            .then(() => axios.get('/api/branch/get-centers-branches')
                .then(res => this.setState({branchList: res.data}))
                .catch(err => alert("Branch List Did not load.. please refresh the page"))
            );
    }

    handleAddOnSubmit(event) {
        event.preventDefault();       //This makes not to load again
        let retConfirm = confirm('Are you sure you want to add this group?');
        if (retConfirm) {
            $('#newCenterForm').modal('hide');
            console.log(this.state.newCenter);
            axios.post('/api/center/create', this.state.newCenter)
                .then(res => {
                    alert(res.data);
                    console.log(res.data);
                    window.location.reload();
                })
                .catch(error => alert("[ FAILED ] Center NOT Added"));
        } else {
            alert("[ FAILED ] Center NOT Added");
        }
    }

    handleEditOnSubmit(event) {
        event.preventDefault();       //This makes not to load again
        let retConfirm = confirm('Are you sure you want to Save this Center?');
        if (retConfirm) {
            $('#editCenterForm').modal('hide');
            console.log(this.state.editCenter);
            axios.post('/api/center/edit', this.state.editCenter)
                .then(res => {
                    alert(res.statusText);
                    console.log(res.data);
                    window.location.reload();
                })
                .catch(error => alert("[ FAILED ] Center NOT Saved"));
        } else {
            alert("[ FAILED ] Center NOT saved");
        }
    }

    handleDeleteOnClick() {
        //event.preventDefault();       //This makes not to load again
        let retConfirm = confirm('Are you sure you want to delete this Center?');
        if (retConfirm) {
            $('#editCenterForm').modal('hide');
            console.log(this.state.editCenter.id);
            axios.delete('/api/center/delete/'.concat(this.state.editCenter.id))
                .then(res => {
                    alert(res.statusText);
                    console.log(res.data);
                    window.location.reload();
                })
                .catch(error => alert("[ FAILED ] Center NOT Deleted"));
        } else {
            alert("[ FAILED ] Center NOT Deleted");
        }
    }

    render() {
        const newCenterFormStructure = [
            [{
                label: "Branch Name",
                id: "branch_name",
                name: "branch_name",
                required: true,
                select: true,
                options: this.state.branchList,
                pattern: "^[A-Za-z]+$",
                message: "Strings Only",
                value: this.state.newCenter.branch_name,
                onChange: (event) => {
                    let branch = this.state.branchList.filter(function (item) {
                        return item.value === event.target.value;
                    })[0];
                    this.setState({
                        newCenter: Object.assign({}, this.state.newCenter, {
                            branch_name: event.target.value,
                            branch_id: branch ? branch.branch_id : '',
                            branch_no: branch ? branch.branch_no : '',
                            index: branch ? ('000' + parseInt(branch.next_center_index)).substr(-3) : ''
                        })
                    })
                }
            }, {
                label: "Branch NO",
                id: "branch_no",
                name: "branch_no",
                required: true,
                // pattern: "^RB[0-9]{4}$",
                disabled: true,
                message: "Numeric Only",
                value: this.state.newCenter.branch_no,
                onChange: (event) =>
                    this.setState({
                        newCenter: Object.assign({}, this.state.newCenter, {branch_no: event.target.value})
                    }),
            }, {
                label: "Center Index",
                id: "index",
                name: "index",
                required: true,
                disabled: true,
                // pattern: "^[A-Za-z]+$",
                message: "Numeric Only",
                value: this.state.newCenter.index,
                onChange: (event) =>
                    this.setState({
                        newCenter: Object.assign({}, this.state.newCenter, {index: event.target.value})
                    }),
            }], [{
                label: "Center Code",
                id: "code",
                name: "code",
                required: true,
                pattern: "^[A-Za-z]{4}$",
                message: "4 Alphanumeric letters Only",
                value: this.state.newCenter.code,
                onChange: (event) =>
                    this.setState({
                        newCenter: Object.assign({}, this.state.newCenter, {code: event.target.value})
                    }),
            }, {
                label: "Center Name",
                id: "name",
                name: "name",
                required: true,
                pattern: "^[A-Za-z]+$",
                message: "invalid",
                value: this.state.newCenter.name,
                onChange: (event) =>
                    this.setState({
                        newCenter: Object.assign({}, this.state.newCenter, {name: event.target.value})
                    }),
            }]
        ];

        const editCenterFormStructure = [
            [{
                label: "Branch Name",
                id: "branch_name",
                name: "branch_name",
                required: true,
                disabled:true,
                options: this.state.branchList,
                pattern: "^[A-Za-z]+$",
                message: "Strings Only",
                value: this.state.editCenter.branch_name,
            }, {
                label: "Branch NO",
                id: "branch_no",
                name: "branch_no",
                required: true,
                // pattern: "^RB[0-9]{4}$",
                disabled: true,
                message: "Numeric Only",
                value: this.state.editCenter.branch_no,
            }, {
                label: "Center Index",
                id: "index",
                name: "index",
                required: true,
                disabled: true,
                // pattern: "^[A-Za-z]+$",
                message: "Numeric Only",
                value: this.state.editCenter.index,
            }], [{
                label: "Center Code",
                id: "code",
                name: "code",
                required: true,
                pattern: "^[A-Za-z]{4}$",
                message: "4 Alphanumeric letters Only",
                value: this.state.editCenter.code,
                onChange: (event) =>
                    this.setState({
                        editCenter: Object.assign({}, this.state.editCenter, {code: event.target.value})
                    }),
            }, {
                label: "Center Name",
                id: "name",
                name: "name",
                required: true,
                pattern: "^[A-Za-z]+$",
                message: "invalid",
                value: this.state.editCenter.name,
                onChange: (event) =>
                    this.setState({
                        editCenter: Object.assign({}, this.state.editCenter, {name: event.target.value})
                    }),
            }],[{
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
                                data-target="#newCenterForm"
                                onClick={() => this.setState({newCenter: this.state.initialNewCenter})}> New Centre
                        </button>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-info btn-lg" disabled={this.state.selectedCenter.index === ''}
                                data-toggle="modal"
                                data-target="#editCenterForm"
                                onClick={() => this.setState({editCenter: this.state.selectedCenter})}>Edit Center
                        </button>
                    </div>
                </div>
                <br/>
                <DataTable columns={this.state.centerTable.columns} data={this.state.centerTableData}
                           rowOnClick={(rowInfo) => this.setState({selectedCenter: rowInfo._original})}/>
                <Form name="newCenterForm" title="Add Center" rows={newCenterFormStructure}
                      handleOnSubmit={this.handleAddOnSubmit.bind(this)}/>
                <Form name="editCenterForm" title="Edit Center" rows={editCenterFormStructure}
                      handleOnSubmit={this.handleEditOnSubmit.bind(this)} submitButtonName="SAVE"/>
            </div>
        );
    }
}

if (document.getElementById('centers-page')) {
    ReactDOM.render(<CentersPage/>, document.getElementById('centers-page'));
}
