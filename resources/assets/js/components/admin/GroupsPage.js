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
            selectedGroup: {index:''},
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

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <button className="btn btn-secondary btn-lg" data-toggle="modal"
                                data-target="#newCustomerForm"
                                onClick={() => this.setState({newGroup: this.state.initialNewGroup})}> New
                            Group
                        </button>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-info btn-lg" disabled={this.state.selectedGroup.index === ''}
                                data-toggle="modal"
                                data-target="#editCustomerForm"
                                onClick={() => this.setState({editGroup: this.state.selectedGroup})}>Edit Group
                        </button>
                    </div>
                </div>
                <br/>
                <DataTable columns={this.state.groupTable.columns} data={this.state.groupTableData}
                           rowOnClick={(rowInfo) => this.setState({selectedGroup: rowInfo._original})}/>
            </div>
        )
    }
}

if (document.getElementById('admin-groups-page')) {
    ReactDOM.render(<GroupsPage/>, document.getElementById('admin-groups-page'));
}