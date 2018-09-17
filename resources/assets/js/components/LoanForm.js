import React, {Component} from 'react';

class LoanForm extends Component {
    render() {
        return (
            <div>
                <div className='modal fade' id='newLoanForm' role='dialog'>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2>Loan Application Form</h2>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-12 col-md-offset-1">
                                        <form role="form" method="post" id="reused_form">

                                            <h4> General Information</h4>
                                            <div className="row">
                                                <div className="col-sm-4 form-group">
                                                    <label htmlFor="executive_code"> Executive Code:</label>
                                                    <input type="text" className="form-control" id="executive_code"
                                                           name="executive_code"
                                                           maxLength="50"/>
                                                </div>
                                                <div className="col-sm-4 form-group">
                                                    <label htmlFor="name"> Name:</label>
                                                    <input type="text" className="form-control" id="name" name="name"
                                                           maxLength="50"/>
                                                </div>
                                                <div className="col-sm-4 form-group">
                                                    <label htmlFor="branch"> Branch:</label>
                                                    <input type="text" className="form-control" id="branch"
                                                           name="branch" maxLength="50"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="date"> Date:</label>
                                                    <input type="text" className="form-control" id="date" name="date"
                                                           maxLength="50"/>
                                                </div>
                                                <div className="col-sm-9 form-group">
                                                    <label htmlFor="into_name"> Introduced Person:</label>
                                                    <input type="tel" className="form-control" id="into_name"
                                                           name="intro_name" required=""
                                                           maxLength="50"/>
                                                </div>
                                            </div>

                                            <h4>Customer Details</h4>
                                            <div className="row">
                                                <div className="col-sm-2 form-group">
                                                    <label htmlFor="customer_nic"> NIC</label>
                                                    <input type="text" className="form-control" id="customer_nic"
                                                           name="customer_nic"
                                                           required="" maxLength="50"/>
                                                </div>
                                                <div className="col-sm-5 form-group">
                                                    <label htmlFor="customer_name"> Name</label>
                                                    <input type="text" className="form-control" id="customer_name"
                                                           name="customer_name"
                                                           required="" maxLength="50"/>
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="customer_bday"> Birthday</label>
                                                    <input type="text" className="form-control" id="customer_bday"
                                                           name="customer_bday"
                                                           required="" maxLength="50"/>
                                                </div>
                                                <div className="col-sm-2 form-group">
                                                    <label htmlFor="customer_age"> Age</label>
                                                    <input type="text" className="form-control" id="customer_age"
                                                           name="customer_age"
                                                           required="" maxLength="50"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="customer_gender"> Gender</label>
                                                    <select className="form-control" name="customer_gender"
                                                            id="customer_gender">
                                                        <option className="form-control" value="male">Male</option>
                                                        <option className="form-control" value="Female">Female</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="customer_married"> Married / Single</label>
                                                    <select className="form-control" name="customer_married"
                                                            id="customer_married">
                                                        <option className="form-control" value="married">Married
                                                        </option>
                                                        <option className="form-control" value="single">Single</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="customer_contact1"> Phone no</label>
                                                    <input type="text" className="form-control" id="customer_contact1"
                                                           name="customer_contact1" required="" maxLength="50"/>
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="customer_contact2"> Mobile no</label>
                                                    <input type="text" className="form-control" id="customer_contact2"
                                                           name="customer_contact2" required="" maxLength="50"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 form-group">
                                                    <label htmlFor="customer_address1"> Address 1</label>
                                                    <input type="text" className="form-control" id="customer_address1"
                                                           name="customer_address1" required="" maxLength="70"/>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <label htmlFor="customer_address1"> Address 2</label>
                                                    <input type="text" className="form-control" id="customer_address2"
                                                           name="customer_address2" required="" maxLength="70"/>
                                                </div>
                                            </div>

                                            <h4>Loan Details</h4>
                                            <div className="row">
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="group_no"> Group No</label>
                                                    <input type="text" className="form-control" id="group_no"
                                                           name="group_no" required=""
                                                           maxLength="50"/>
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="member_no">Member No</label>
                                                    <input type="text" className="form-control" id="member_no"
                                                           name="member_no" required=""
                                                           maxLength="50"/>
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="centre_code">Centre Code</label>
                                                    <input type="text" className="form-control" id="centre_code"
                                                           name="centre_code"
                                                           required="" maxLength="50"/>
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="centre_name">Centre Name</label>
                                                    <input type="text" className="form-control" id="centre_name"
                                                           name="customer_contact1"
                                                           required="" maxLength="50"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="loan_index">Loan index</label>
                                                    <input type="text" className="form-control" id="loan_index"
                                                           name="loan_index"
                                                           required="" maxLength="50"/>
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="loan_number">Loan Number</label>
                                                    <input type="text" className="form-control" id="loan_number"
                                                           name="loan_number"
                                                           required="" maxLength="50"/>
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label>Something</label>
                                                    <button className="btn btn-primary btn-rose">Generate Loan NO
                                                    </button>
                                                </div>
                                            </div>

                                            <h4>Loan Amount Details</h4>
                                            <div className="row">
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="loan_amount">Amount</label>
                                                    <input type="number" className="form-control" id="loan_amount"
                                                           name="loan_amount"
                                                           required="" maxLength="50"/>
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="no_weeks">No. of Weeks</label>
                                                    <input type="number" className="form-control" id="no_weeks"
                                                           name="no_weeks" required=""
                                                           maxLength="50"/>
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="rate">Rate</label>
                                                    <input type="number" className="form-control" id="rate" name="rate"
                                                           required=""
                                                           maxLength="50"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="net_amount">Net Amount</label>
                                                    <input type="number" className="form-control" id="net_amount"
                                                           name="net_amount"
                                                           required="" maxLength="50"/>
                                                </div>
                                                <div className="col-sm-4 form-group">
                                                    <label htmlFor="weekly_installment">Weekly payment</label>
                                                    <input type="number" className="form-control"
                                                           id="weekly_installment"
                                                           name="weekly_installment" required="" maxLength="50"/>
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="">ll</label>
                                                    <button className="btn btn-danger">Re-Calculate</button>
                                                </div>
                                            </div>

                                            <h4>Guarantor Details</h4>
                                            <div className="row">
                                                <div className="col-sm-2 form-group">
                                                    <label htmlFor="guarantor_nic"> NIC</label>
                                                    <input type="text" className="form-control" id="guarantor_nic"
                                                           name="guarantor_nic"
                                                           required="" maxLength="50"/>
                                                </div>
                                                <div className="col-sm-5 form-group">
                                                    <label htmlFor="guarantor_name"> Name</label>
                                                    <input type="text" className="form-control" id="guarantor_name"
                                                           name="guarantor_name"
                                                           required="" maxLength="50"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="guarantor_gender"> Gender</label>
                                                    <select className="form-control" name="guarantor_gender"
                                                            id="guarantor_gender">
                                                        <option className="form-control" value="male">Male</option>
                                                        <option className="form-control" value="Female">Female</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="guarantor_married"> Married / Single</label>
                                                    <select className="form-control" name="guarantor_married"
                                                            id="guarantor_married">
                                                        <option className="form-control" value="married">Married
                                                        </option>
                                                        <option className="form-control" value="single">Single</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="guarantor_contact1"> Phone no</label>
                                                    <input type="text" className="form-control" id="guarantor_contact1"
                                                           name="guarantor_contact1" required="" maxLength="50"/>
                                                </div>
                                                <div className="col-sm-3 form-group">
                                                    <label htmlFor="guarantor_contact2"> Mobile no</label>
                                                    <input type="text" className="form-control" id="guarantor_contact2"
                                                           name="guarantor_contact2" required="" maxLength="50"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 form-group">
                                                    <label htmlFor="guarantor_address1"> Address 1</label>
                                                    <input type="text" className="form-control" id="guarantor_address1"
                                                           name="guarantor_address1" required="" maxLength="70"/>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <label htmlFor="guarantor_address1"> Address 2</label>
                                                    <input type="text" className="form-control" id="guarantor_address2"
                                                           name="guarantor_address2" required="" maxLength="70"/>
                                                </div>
                                            </div>
                                            <p>Remarks</p>
                                            <div className="row">
                                                <div className="col-sm-12 form-group">
                                                    <label htmlFor="name">Text area</label>
                                                    <textarea className="form-control" id="message" name="message"
                                                              placeholder="Your Message Here" maxLength="6000"
                                                              rows="7">Something</textarea>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 form-group">
                                                    <button type="submit" className="btn btn-lg btn-success btn-block"
                                                            id="btn_loan">Apply
                                                        Loan
                                                    </button>
                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <button type="reset" className="btn btn-lg btn-behance btn-block"
                                                            id="btnContactUs">Reset
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <div id="success_message"
                                             style={{width: '100%', height: '100%', display: 'none'}}><h3>Sent your
                                            message
                                            successfully!</h3></div>
                                        <div id="error_message"
                                             style={{width: '100%', height: '100%', display: 'none',}}>
                                            <h3>Error</h3> Sorry there
                                            was an error sending your form.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoanForm;