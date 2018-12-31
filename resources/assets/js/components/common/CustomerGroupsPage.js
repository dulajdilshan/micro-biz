import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import Popup from "reactjs-popup";
import GroupForm from "../GroupForm";
import '../../../css/groups_modal.css'

import axios from "axios/index";

export default class CustomerGroupsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupList: [],
            newGroup: {
                branch_id: '',
                center_code: '',
                center_name: '',
                customer_1: {},
                customer_2: {},
                customer_3: {},
                customer_4: {},
                customer_5: {},
            },
            grouplessCustomers: [],
            selectedGroup: {},
            page: {
                columns: [
                    {Header: 'Group ID', accessor: 'id'},
                    {Header: 'Branch ID', accessor: 'branch_id'},
                    {Header: 'Center Code', accessor: 'center_code'},
                    {Header: 'Center Name', accessor: 'center_name'},
                    {Header: 'Controllers', accessor: '#ed'},
                ]
            }
        }
    }

    selectGroup(group) {
        this.setState({selectedGroup: group})
    }

    componentDidMount() {
        axios.get('/api/groups')
            .then(res => {
                this.setState({groupList: res.data});
            })
            .catch(err => {
                console.log(err);
                alert("Groups loading failed !! server may be down ..try starting the server and reload the page again");
            })
            .then(() => axios.get('/api/customer/get-groupless')
                .then(res => {
                    this.setState({grouplessCustomers: res.data});
                })
                .catch(err => {
                    console.log(err);
                    alert("Customers loading failed !! server may be down ..try starting the server and reload the page again");
                }));
    }

    handleNewGroupOpen() {
        // axios.get('/api/customer/get-groupless')
        //     .then(res => {
        //         this.setState({grouplessCustomers: res.data});
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         alert("Customers loading failed !! server may be down ..try starting the server and reload the page again");
        //     });
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-3">
                            <button type="button" className="btn btn-secondary btn-lg" data-toggle="modal"
                                    data-target="#newGroupForm" onClick={this.handleNewGroupOpen.bind(this)}>New Group
                            </button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-secondary btn-lg" data-toggle="modal" disabled
                                    data-target="#editGroup">Edit
                            </button>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <DataTable columns={this.state.page.columns} data={this.state.groupList}/>
                <GroupForm name="newGroupForm" grouplessCustomers={this.state.grouplessCustomers}/>
                {/*<GroupForm name="editGroup"/>*/}
            </div>
        );
    }
}

if (document.getElementById('customer-groups-page')) {
    ReactDOM.render(<CustomerGroupsPage/>, document.getElementById('customer-groups-page'));
}
