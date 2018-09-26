import React, {Component} from 'react';

class CustomerForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            customer: {
                first_name: '',
                last_name: '',
                age: '',
                nic: '',
                gender: 'male',
                married: 'single',
                contact_no1: '',
                contact_no2: '',
                address_1: '',
                address_2: ''
            }
        };
        this.state = this.initialState;
    }

    handleNicChange(event) {
        this.props._handleNicChange(event);
    }

    handleFirstNameChange(event) {
        this.props._handleFirstNameChange(event);
    }

    handleLastNameChange(event) {
        this.props._handleLastNameChange(event);
    }

    handleAgeChange(event) {
        this.props._handleAgeChange(event);
    }

    handleBirthdayChange(event) {
        this.props._handleBirthdayChange(event);
    }

    handleAddress1Change(event) {
        this.props._handleAddress1Change(event);
    }

    handleAddress2Change(event) {
        this.props._handleAddress2Change(event);
    }

    handleContactNo1Change(event) {
        this.props._handleContactNo1Change(event);
    }

    handleContactNo2Change(event) {
        this.props._handleContactNo2Change(event);
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

    handleAddCustomerButton(event) {
        //Add new Customer Button
    }

    render() {
        return (
            <div className="modal fade" id="customerForm" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Customer</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <form action="" method="post">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-sm-2 form-group">
                                        <label for="customer_nic"> NIC</label>
                                        <input type="text" className="form-control" id="nic"
                                               name="customer_nic" required="" maxlength="50"
                                               value={this.props.newCustomer.nic}
                                               onChange={(event) => {
                                                   this.handleNicChange(event);
                                               }}
                                        />
                                    </div>
                                    <div className="col-sm-2 form-group">
                                        <label for="customer_name"> First Name</label>
                                        <input type="text" className="form-control" id="first_name"
                                               name="customer_name" required="" maxlength="50"
                                               value={this.props.newCustomer.first_name}
                                               onChange={this.handleFirstNameChange.bind(this)}
                                        />
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer_name"> Last Name</label>
                                        <input type="text" className="form-control" id="last_name"
                                               name="customer_name" required="" maxLength="50"
                                               value={this.props.newCustomer.last_name}
                                               onChange={this.handleLastNameChange.bind(this)}
                                        />
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label for="customer_bday"> Birthday</label>
                                        <input type="text" className="form-control" id="birthday"
                                               name="customer_bday" required="" maxlength="50"
                                               value={this.props.newCustomer.birthday}
                                               onChange={this.handleBirthdayChange.bind(this)}
                                        />
                                    </div>
                                    <div className="col-sm-2 form-group">
                                        <label for="customer_age"> Age</label>
                                        <input type="text" className="form-control" id="age"
                                               name="customer_age" required="" maxlength="50"
                                               value={this.props.newCustomer.age}
                                               onChange={this.handleAgeChange.bind(this)}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3 form-group">
                                        <label for="customer_gender"> Gender</label>
                                        <select className="form-control" name="gender"
                                                id="customer_gender" onChange={this.handleGenderChange.bind(this)}
                                                value={this.props.newCustomer.gender}>
                                            <option className="form-control" id='male' value="male">Male</option>
                                            <option className="form-control" id='female' value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label for="customer_married"> Married / Single</label>
                                        <select className="form-control" name="married"
                                                value={this.props.newCustomer.married}
                                                id="customer_married"
                                                onChange={this.handleMarriedSingleChange.bind(this)}
                                        >
                                            <option className="form-control" value="married">Married</option>
                                            <option className="form-control" value="single">Single</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label for="customer_contact1"> Phone no</label>
                                        <input type="text" className="form-control" id="contact_no1"
                                               name="customer_contact1" required="" maxlength="50"
                                               value={this.props.newCustomer.contact_no1}
                                               onChange={this.handleContactNo1Change.bind(this)}
                                        />
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label for="customer_contact2"> Mobile no</label>
                                        <input type="text" className="form-control" id="contact_no2"
                                               name="customer_contact2" required="" maxlength="50"
                                               value={this.props.newCustomer.contact_no2}
                                               onChange={this.handleContactNo2Change.bind(this)}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                        <label for="customer_address1"> Address 1</label>
                                        <input type="text" className="form-control" id="address_1"
                                               name="customer_address1" required="" maxlength="70"
                                               value={this.props.newCustomer.address_1}
                                               onChange={this.handleAddress1Change.bind(this)}
                                        />
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label for="customer_address1"> Address 2</label>
                                        <input type="text" className="form-control" id="address_2"
                                               name="customer_address2" required="" maxlength="70"
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