import React, {Component} from 'react';
import ReactTable from "react-table";

class DataTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
                name: 'Jason Maurer',
                age: 23,
            }
        }];

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

        let columns = [

        ];

        return (
            <div>
                <ReactTable data={data} columns={columns} className="-striped -highlight" filterable/>
            </div>
        );
    }
}

export default DataTable;