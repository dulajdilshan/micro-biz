import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import Form from "../Form";
import axios from "axios";

export default class CentresPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCenter: {
                branch_id: '',
                center_code: '',
                center_name: ''
            },
            centerTable: {
                columns: [
                    {Header: 'Branch ID', accessor: 'branch_id'},
                    {Header: 'Center Code', accessor: 'center_code'},
                    {Header: 'Center Name', accessor: 'center_name'},
                    {Header: 'Options', accessor: 'options'},
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
            });
    }

    handleOnSubmit(event) {
        event.preventDefault();       //This makes not to load again
        let retConfirm = confirm('Are you sure you want to add this group?');
        if (retConfirm) {
            $('#newCenterForm').modal('hide');
            console.log(this.state.newCenter);
            axios.post('/api/center/create', this.state.newCenter)
                .then(res => {
                    alert(res.data);
                    console.log(res);
                    window.location.reload();
                })
                .catch(error => alert("[ FAILED ] Center NOT Added"));
        } else {
            alert("[ FAILED ] Center NOT Added");
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
                value: this.state.newCenter.branch_id,
                onChange: (event) =>
                    this.setState({
                        newCenter: Object.assign({}, this.state.newCenter, {branch_id: event.target.value})
                    }),
            }, {
                label: "Center Code",
                id: "center_code",
                name: "center_code",
                required: true,
                pattern: "^[A-Za-z]+$",
                message: "Numeric Only",
                value: this.state.newCenter.center_code,
                onChange: (event) =>
                    this.setState({
                        newCenter: Object.assign({}, this.state.newCenter, {center_code: event.target.value})
                    }),
            }, {
                label: "Center Name",
                id: "center_name",
                name: "center_name",
                required: true,
                pattern: "^[A-Za-z]+$",
                message: "invalid",
                value: this.state.newCenter.center_name,
                onChange: (event) =>
                    this.setState({
                        newCenter: Object.assign({}, this.state.newCenter, {center_name: event.target.value})
                    }),
            }]
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
                <DataTable columns={this.state.centerTable.columns} data={this.state.centerTableData}/>
                <Form name="newCenterForm" title="Add Center" rows={newCenterFormStructure}
                      handleOnSubmit={this.handleOnSubmit.bind(this)}/>
            </div>
        );
    }
}

if (document.getElementById('centres-page')) {
    ReactDOM.render(<CentresPage/>, document.getElementById('centres-page'));
}
