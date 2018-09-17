import React, {Component} from 'react';

class GroupForm extends Component {
    render() {
        return (
            <div className="modal fade" id="groupForm" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add  Group</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <form action="" method="post">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-sm-2 form-group">
                                        <label for="customer_nic"> NIC</label>
                                        <input type="text" className="form-control" id="customer_nic"
                                               name="customer_nic" required="" maxlength="50"/>
                                    </div>
                                    <div className="col-sm-5 form-group">
                                        <label for="customer_name"> Name</label>
                                        <input type="text" className="form-control" id="customer_name"
                                               name="customer_name" required="" maxlength="50"/>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label for="customer_bday"> Birthday</label>
                                        <input type="text" className="form-control" id="customer_bday"
                                               name="customer_bday" required="" maxlength="50"/>
                                    </div>
                                    <div className="col-sm-2 form-group">
                                        <label for="customer_age"> Age</label>
                                        <input type="text" className="form-control" id="customer_age"
                                               name="customer_age" required="" maxlength="50"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3 form-group">
                                        <label for="customer_gender"> Gender</label>
                                        <select className="form-control" name="customer_gender"
                                                id="customer_gender">
                                            <option className="form-control" value="male">Male</option>
                                            <option className="form-control" value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label for="customer_married"> Married / Single</label>
                                        <select className="form-control" name="customer_married"
                                                id="customer_married">
                                            <option className="form-control" value="married">Married</option>
                                            <option className="form-control" value="single">Single</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label for="customer_contact1"> Phone no</label>
                                        <input type="text" className="form-control" id="customer_contact1"
                                               name="customer_contact1" required="" maxlength="50"/>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label for="customer_contact2"> Mobile no</label>
                                        <input type="text" className="form-control" id="customer_contact2"
                                               name="customer_contact2" required="" maxlength="50"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                        <label for="customer_address1"> Address 1</label>
                                        <input type="text" className="form-control" id="customer_address1"
                                               name="customer_address1" required="" maxlength="70"/>
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label for="customer_address1"> Address 2</label>
                                        <input type="text" className="form-control" id="customer_address2"
                                               name="customer_address2" required="" maxlength="70"/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">ADD</button>
                                <button type="reset" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupForm;