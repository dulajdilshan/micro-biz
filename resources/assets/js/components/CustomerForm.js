import React, {Component} from 'react';

class CustomerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
        }
    }

    handleNicChange(event) {
        this.props._handleNicChange(event);
        if (event.target.value.length !== 10 || event.target.value[event.target.value.length - 1] !== 'v') {
            this.setState({isError: true})
        } else {
            this.setState({isError: false})
        }
    }

    handleFirstNameChange(event) {
        this.props._handleFirstNameChange(event);
        if (event.target.value.length < 3) {
            this.setState({isError: true})
        } else {
            this.setState({isError: false})
        }
    }

    handleLastNameChange(event) {
        this.props._handleLastNameChange(event);
        if (event.target.value.length < 3) {
            this.setState({isError: true})
        } else {
            this.setState({isError: false})
        }
    }

    handleAgeChange(event) {
        this.props._handleAgeChange(event);
    }

    handleBirthdayChange(event) {
        this.props._handleBirthdayChange(event);
    }

    handleAddress1Change(event) {
        this.props._handleAddress1Change(event);
        if (event.target.value.length < 3) {
            this.setState({isError: true})
        } else {
            this.setState({isError: false})
        }
    }

    handleAddress2Change(event) {
        this.props._handleAddress2Change(event);
        if (event.target.value.length < 3) {
            this.setState({isError: true})
        } else {
            this.setState({isError: false})
        }
    }

    handleContactNo1Change(event) {
        this.props._handleContactNo1Change(event);
        let regex = /^[0-9]\d*$/;
        if (event.target.value.length !== 10 || !regex.test(event.target.value)) {
            this.setState({isError: true})
        } else {
            this.setState({isError: false})
        }
    }

    handleContactNo2Change(event) {
        this.props._handleContactNo2Change(event);
        let regex = /^[0-9]\d*$/;
        if (event.target.value.length !== 10 || !regex.test(event.target.value)) {
            this.setState({isError: true})
        } else {
            this.setState({isError: false})
        }
    }

    handleGenderChange(event) {
        this.props._handleGenderChange(event);
    }

    handleMarriedSingleChange(event) {
        this.props._handleMarriedSingleChange(event);
    }

    handleCloseButton(event) {
        //Close the Form button
    }

    handleOnSubmit(event) {
        event.preventDefault();
        $('#customerForm').modal('hide');
        this.props._handleCreateCustomer(event);
    }

    render() {
        console.log('Customer Form Loading');
        return (
            <div className="modal fade" id="customerForm" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Customer</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div style={{margin: '10px', display: this.state.isError ? 'block' : 'none'}}>
                            <h5 style={{color: 'red'}}>***Please put valid Details</h5>
                        </div>
                        <form onSubmit={this.handleOnSubmit.bind(this)} onclose={() => {this.setState({isError: false})}}>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-sm-3 form-group">
                                        <label> NIC</label>
                                        <input type="text" className="form-control" id="nic"
                                               name="customer_nic" required=""
                                               value={this.props.newCustomer.nic}
                                               onChange={(event) => {
                                                   this.handleNicChange(event);
                                               }}
                                        />
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label> First Name</label>
                                        <input type="text" className="form-control" id="first_name"
                                               name="customer_name" required=""
                                               value={this.props.newCustomer.first_name}
                                               onChange={this.handleFirstNameChange.bind(this)}
                                        />
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label> Last Name</label>
                                        <input type="text" className="form-control" id="last_name"
                                               name="customer_name" required=""
                                               value={this.props.newCustomer.last_name}
                                               onChange={this.handleLastNameChange.bind(this)}
                                        />
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label> Birthday</label>
                                        <input type="date" className="form-control" id="birthday"
                                               name="customer_bday" required=""
                                               value={this.props.newCustomer.birthday}
                                               onChange={this.handleBirthdayChange.bind(this)}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2 form-group">
                                        <label> Age</label>
                                        <input type="text" className="form-control" id="age"
                                               name="customer_age" required=""
                                               value={this.props.newCustomer.age}
                                               onChange={this.handleAgeChange.bind(this)}
                                        />
                                    </div>
                                    <div className="col-sm-2 form-group">
                                        <label> Gender</label>
                                        <select className="form-control" name="gender"
                                                id="customer_gender" onChange={this.handleGenderChange.bind(this)}
                                                value={this.props.newCustomer.gender}>
                                            <option className="form-control" id='male' value="male">Male</option>
                                            <option className="form-control" id='female' value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-2 form-group">
                                        <label> Married / Single</label>
                                        <select className="form-control" name="married"
                                                value={this.props.newCustomer.married}
                                                id="customer_married"
                                                onChange={this.handleMarriedSingleChange.bind(this)}
                                        >
                                            <option className="form-control" value='1'>Married</option>
                                            <option className="form-control" value='0'>Single</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label> Phone no</label>
                                        <input type="text" className="form-control" id="contact_no1"
                                               name="customer_contact1" required=""
                                               value={this.props.newCustomer.contact_no1}
                                               onChange={this.handleContactNo1Change.bind(this)}
                                        />
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label> Mobile no</label>
                                        <input type="text" className="form-control" id="contact_no2"
                                               name="customer_contact2" required=""
                                               value={this.props.newCustomer.contact_no2}
                                               onChange={this.handleContactNo2Change.bind(this)}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                        <label> Address 1</label>
                                        <input type="text" className="form-control" id="address_1"
                                               name="customer_address1" required=""
                                               value={this.props.newCustomer.address_1}
                                               onChange={this.handleAddress1Change.bind(this)}
                                        />
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label> Address 2</label>
                                        <input type="text" className="form-control" id="address_2"
                                               name="customer_address2" required=""
                                               value={this.props.newCustomer.address_2}
                                               onChange={this.handleAddress2Change.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Add</button>
                                <button className="btn btn-default" data-dismiss="modal"
                                        onClick={this.handleCloseButton.bind(this)}>Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerForm;