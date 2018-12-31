import React, {Component} from 'react';
import '../../css/groups_modal.css'

class GroupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newGroup: {
                branch_id: '',
                center_code: '',
                center_name: '',
                selectedCustomers: {
                    customer_1: {},
                    customer_2: {},
                    customer_3: {},
                    customer_4: {},
                    customer_5: {}
                }
            },
            customerPool: [],
            isCenterEntered: false
        };
    }

    handleOnChangeCenterCode() {
        this.setState({customerPool: [...this.props.grouplessCustomers]});
        //Checking whether the center code is valid or not. Then,
        this.setState({isCenterEntered:true})
    }

    getCustomer(id){

    }


    render() {
        return (
            <div className="modal fade show" id={this.props.name}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Group</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <form action="" method="post">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-sm-2 form-group">
                                        <label for="branch_id"> Branch ID</label>
                                        <input type="text" className="form-control" id="branch_id"
                                               name="branch_id" required="" maxlength="50"/>
                                    </div>
                                    <div className="col-sm-5 form-group">
                                        <label for="center_code"> Center Code</label>
                                        <input type="text" className="form-control" id="center_code"
                                               name="center_code"
                                               onChange={this.handleOnChangeCenterCode.bind(this)}
                                               required="" maxlength="50"/>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label for="center_name"> Center Name</label>
                                        <input type="text" className="form-control" id="center_name"
                                               name="center_name" disabled/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3 form-group">
                                        <label for="customer_1"> Customer 1 </label>
                                        {<select className="form-control" name="customer_1" id="customer_1"
                                                 disabled={!this.state.isCenterEntered}
                                                 onChange={(event) => {
                                                     console.log(event.target.value);
                                                 }
                                                 }>
                                            <option key='0' className="form-control" value='0'>NOT SELECTED</option>
                                            {this.state.customerPool.map(c =>
                                                <option key={c.id}
                                                        className="form-control"
                                                        value={c.id}>{c.nic}
                                                </option>
                                            )}
                                        </select>}
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label for="customer1_name"> Customer 1 Name</label>
                                        <input type="text" className="form-control" id="customer1_name"
                                               name="customer1_name" disabled maxLength="50" value={this}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer_2"> Customer 2 </label>
                                        <select className="form-control" name="customer_2"
                                                id="customer_2">
                                            <option className="form-control" value="male">Male</option>
                                            <option className="form-control" value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer2_name"> Customer 2 Name</label>
                                        <input type="text" className="form-control" id="customer2_name"
                                               name="customer2_name" disabled maxLength="50"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer_3"> Customer 3 </label>
                                        <select className="form-control" name="customer_3"
                                                id="customer_3">
                                            <option className="form-control" value="male">Male</option>
                                            <option className="form-control" value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer3_name"> Customer 3 Name</label>
                                        <input type="text" className="form-control" id="customer3_name"
                                               name="customer3_name" disabled maxLength="50"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer_4"> Customer 4 </label>
                                        <select className="form-control" name="customer_4"
                                                id="customer_4">
                                            <option className="form-control" value="male">Male</option>
                                            <option className="form-control" value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer4_name"> Customer 4 Name</label>
                                        <input type="text" className="form-control" id="customer4_name"
                                               name="customer4_name" disabled maxLength="50"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer_5"> Customer 5 </label>
                                        <select className="form-control" name="customer_5"
                                                id="customer_5">
                                            <option className="form-control" value="male">Male</option>
                                            <option className="form-control" value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer5_name"> Customer 5 Name</label>
                                        <input type="text" className="form-control" id="customer5_name"
                                               name="customer5_name" disabled maxLength="50"/>
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