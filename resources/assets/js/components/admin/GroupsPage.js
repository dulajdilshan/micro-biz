import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import Form from "../Form";
import axios from "axios";

export default class GroupsPage extends Component {
    constructor(props) {
        super(props);
        this.initialState = {};
        this.state = {
            initialNewGroup: {
                branch_no: '', center_no: '', group_index: '', branch_id: '', center_id: '',
                customerList: []
            },
            newGroup: {},
            editGroup: {},
            selectedGroup: {index: ''},
            groupTableData: [],
            groupTable: {
                columns: [
                    {Header: 'Group No', accessor: 'index'},
                    {Header: 'Center Name', accessor: 'center_name'},
                    {Header: 'Branch Name', accessor: 'branch_name'},
                ]
            },
            branchList: [{branch_id: 0, branch_name: "000", branch_no: "000", value: "<- Select ->"}],
            initialCenterList: [{center_id: 0, center_name: "000", center_no: "000", value: "<- Select ->"}],
            centerListBuffer: []
        }
    }

    setGroupTableData(res) {
        this.setState({groupTableData: res.data});
    };

    setBranchList(res) {
        this.setState({branchList: this.state.branchList.concat(res.data)})
    }

    setCenterListBuffer(res) {
        this.setState({centerListBuffer: res.data})
    }

    loadData(url, successCallBack, dataName) {
        return (axios.get(url)
            .then(successCallBack)
            .catch(err => {
                console.log(err);
                alert(dataName + " loading failed !! Try reloading the page again");
            }));
    }

    componentDidMount() {
        // this.loadData('/api/customers', this.setCustomerTableData.bind(this), 'Customers');
        this.loadData('/api/groups', this.setGroupTableData.bind(this), 'Groups');
        this.loadData('/api/branch/get-customer-branches', this.setBranchList.bind(this), 'Branches');
        // this.loadData('/api/center/get-customer-centers', this.setCenterListBuffer.bind(this), 'Centers');
    }

    handleAddOnSubmit(event) {
        event.preventDefault();    //This makes not to load again
        let retConfirm = confirm('Are you sure you want to add this Group?');
        if (retConfirm) {
            $('#newGroupForm').modal('hide');
            console.log(this.state.newGroup);
            //     axios.post('/api/customer/create', this.state.newCustomer)
            //         .then(res => {
            //             alert(res.data);
            //             console.log(res.data);
            //             window.location.reload();
            //         })
            //         .catch(error => alert("[ FAILED ] Customer NOT Added"));
        } else {
            alert("[ FAILED ] Group NOT Added");
        }
    }

    render() {
        const newGroupFormStructure = [
            [{
                label: "Branch Name",
                id: "branch_name",
                name: "branch_name",
                required: true,
                aselect: true,
                colSize: 3,
                options: this.state.branchList,
                pattern: "^[A-Za-z]+$",
                message: "Strings Only",
                value: this.state.newGroup.branch_id,
                onChange: (event) => {
                    let branch = this.state.branchList.filter(function (item) {
                        return item.id === parseInt(event.target.value);
                    })[0];
                    let centers = this.state.centerListBuffer.filter(function (item) {
                        return item.branch_id === parseInt(event.target.value);
                    });
                    this.setState({
                        centerList: this.state.initialCenterList.concat(centers),
                        newGroup: Object.assign({}, this.state.newGroup, {
                            branch_id: parseInt(event.target.value),
                            branch_name: branch ? branch.branch_name : '',
                            branch_no: branch ? branch.branch_no : '',
                            center_id: '',
                            center_name: '',
                            center_no: '',
                            group_no: ''
                        })
                    })
                }
            }, {
                label: "Branch NO",
                id: "branch_no",
                name: "branch_no",
                required: true,
                colSize: 2,
                // pattern: "^RB[0-9]{4}$",
                disabled: true,
                // message: "Numeric Only",
                value: this.state.newGroup.branch_no,
            }, {
                label: "Center Name",
                id: "center_name",
                name: "center_name",
                required: true,
                aselect: true,
                colSize: 3,
                options: this.state.centerList,
                pattern: "^[A-Za-z]+$",
                message: "Strings Only",
                value: this.state.newGroup.center_id,
                onChange: (event) => {
                    let center = this.state.centerList.filter(function (item) {
                        return item.id === parseInt(event.target.value);
                    })[0];
                    this.setState({
                        newGroup: Object.assign({}, this.state.newGroup, {
                            center_id: parseInt(event.target.value),
                            center_name: center ? center.center_name : '',
                            center_no: center ? center.center_no : '',
                            index: center ? ('000' + parseInt(center.next_group_index)).substr(-3) : '',
                        })
                    })
                }
            }, {
                label: "Center NO",
                id: "center_no",
                name: "center_no",
                required: true,
                colSize: 2,
                // pattern: "^RB[0-9]{4}$",
                disabled: true,
                // message: "Numeric Only",
                value: this.state.newCustomer.center_no,
            }], [], [], [], [], []
        ];
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <button className="btn btn-secondary btn-lg" data-toggle="modal"
                                data-target="#newGroupForm"
                                onClick={() => this.setState({newGroup: this.state.initialNewGroup})}> New
                            Group
                        </button>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-info btn-lg" disabled={this.state.selectedGroup.index === ''}
                                data-toggle="modal"
                                data-target="#editGroupForm"
                                onClick={() => this.setState({editGroup: this.state.selectedGroup})}>Edit Group
                        </button>
                    </div>
                </div>
                <br/>
                <DataTable columns={this.state.groupTable.columns} data={this.state.groupTableData}
                           rowOnClick={(rowInfo) => this.setState({selectedGroup: rowInfo._original})}/>
                <Form name="newGroupForm" title="Add Group" rows={newGroupFormStructure}
                      handleOnSubmit={this.handleAddOnSubmit.bind(this)}/>
            </div>
        )
    }
}

if (document.getElementById('admin-groups-page')) {
    ReactDOM.render(<GroupsPage/>, document.getElementById('admin-groups-page'));
}