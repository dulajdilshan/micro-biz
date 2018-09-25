import React, {Component} from 'react';
import ReactTable from "react-table";

class DataTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let data = [{
        //     fullName: 'Jodha Akbar',
        //     nic: '956722345v',
        //     groupNumber: 3,
        //     loanNumber:2,
        //     loanAmount:23000,
        //     weeklyPayment:21300,
        //     phoneNumber:'0712345678'
        //     // friend: {
        //     //     name: 'Jason Maurer',
        //     //     age: 23,
        //     // }
        // }];

        // let columns = [{
        //     Header: 'Name',
        //     accessor: 'name' // String-based value accessors!
        // }, {
        //     Header: 'Age',
        //     accessor: 'age',
        //     Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        // }, {
        //     id: 'friendName', // Required because our accessor is not a string
        //     Header: 'Friend Name',
        //     accessor: d => d.friend.name // Custom value accessors!
        // }, {
        //     Header: props => <span>Friend Age</span>, // Custom header components!
        //     accessor: 'friend.age'
        // }];

        // let columns = [
        //     {Header: 'Name', accessor: 'fullName'},
        //     {Header: 'NIC', accessor: 'nic'},
        //     {Header: 'Group Number', accessor: 'groupNumber'},
        //     {Header: 'Loan number', accessor: 'loanNumber'},
        //     {Header: 'Loan Amount', accessor: 'loanAmount'},
        //     {Header: 'Weekly Payment (Amount)', accessor: 'weeklyPayment'},
        //     {Header: 'Phone number', accessor: 'phoneNumber'},
        //
        // ];

        return (
            <div>
                <ReactTable data={this.props.data} columns={this.props.columns} className="-striped -highlight" filterable/>
            </div>
        );
    }
}

export default DataTable;