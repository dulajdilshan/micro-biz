import React, {Component} from 'react';
import '../../css/groups_modal.css'

class GroupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newGroup: {
                branch_id: '4',
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
            selectedCustomers: [],
            customerPool: [],
            isCenterEntered: false
        };
    }

    handleOnChangeBranchId(event) {
        let newGroup = Object.assign({}, this.state.newGroup, {branch_id: event.target.value});
        this.setState({newGroup: newGroup, isCenterEntered: this.state.newGroup.center_code !== ''})
    }

    handleOnChangeCenterCode(event) {
        let newGroup = Object.assign({}, this.state.newGroup, {center_code: event.target.value});
        this.setState({
            newGroup: newGroup,
            customerPool: [...this.props.grouplessCustomers],
            isCenterEntered: this.state.newGroup.center_code !== ''
        });
    }

    handleOnChangeSelectCustomer(event) {
        let cPool = this.state.customerPool;
        let selectElement = event.target;
        let optionIndex = selectElement.selectedIndex;
        let selectedCustomerId = selectElement.options[optionIndex].value;
        let newGroup = Object.assign({}, this.state.newGroup);
        var selectedCustomer = {};
        for (let x in cPool) {
            if (selectedCustomerId == cPool[x].id) {
                selectedCustomer = cPool[x];
                newGroup.selectedCustomers[selectElement.id] = selectedCustomer;
                this.setState({newGroup});
                break;
            } else if (selectedCustomerId == 0) {
                selectedCustomer.full_name = "[[NOT AVAILABLE]]";
                newGroup.selectedCustomers[selectElement.id] = selectedCustomer;
                this.setState({newGroup});
                break;
            }
        }
        this.filterCustomers();
    }

    filterCustomers() {
        let ungroupCustomers = this.props.grouplessCustomers;
        let selCus = this.state.newGroup.selectedCustomers;
        var newUngroupCustomers = ungroupCustomers.filter((value, index, arr) => {
            if (selCus.customer_1.id === value.id) return false;
            else if (selCus.customer_2.id === value.id) return false;
            else if (selCus.customer_3.id === value.id) return false;
            else if (selCus.customer_4.id === value.id) return false;
            else if (selCus.customer_5.id === value.id) return false;
            return true;
        });
        this.setState({customerPool: newUngroupCustomers})
    }

    handleMapCustomerOptions(customer) {
        return (
            <option key={customer.id}
                    className="form-control"
                    value={customer.id}>{customer.nic}
            </option>
        )
    }

    handleOnSubmit(event) {
        event.preventDefault();       //This makes not to load again
        let retConfirm = confirm('Are you sure you want to add this group?');
        if (retConfirm) {
            $('#newGroupForm').modal('hide');
            console.log(this.state.newGroup);
            axios.post('/api/group/create', this.state.newGroup)
                .then(res => {
                    alert(res.data);
                    console.log(res);
                    window.location = '/manager-groups'
                })
                .catch(error => alert("[ FAILED ] Group NOT Added"));
        } else {
            alert("[ FAILED ] Group NOT Added");
        }
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
                        <form onSubmit={this.handleOnSubmit.bind(this)}>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-sm-2 form-group">
                                        <label for="branch_id"> Branch ID</label>
                                        <input type="text" className="form-control" id="branch_id"
                                               name="branch_id"
                                               onChange={this.handleOnChangeBranchId.bind(this)} required=""
                                               maxlength="50"/>
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
                                            // disabled={!this.state.isCenterEntered}
                                                 onChange={(event) => this.handleOnChangeSelectCustomer(event)}>
                                            <option key='0' className="form-control" value='0'>NOT SELECTED</option>
                                            {this.state.customerPool.map(this.handleMapCustomerOptions.bind(this))}
                                        </select>}
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label for="customer1_name"> Customer 1 Name</label>
                                        <input type="text" className="form-control" id="customer1_name"
                                               name="customer1_name" disabled maxLength="50"
                                               value={this.state.newGroup.selectedCustomers.customer_1.full_name}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer_2"> Customer 2 </label>
                                        {<select className="form-control" name="customer_2" id="customer_2"
                                            // disabled={!this.state.isCenterEntered}
                                                 onChange={(event) => this.handleOnChangeSelectCustomer(event)}>
                                            <option key='0' className="form-control" value='0'>NOT SELECTED</option>
                                            {this.state.customerPool.map(this.handleMapCustomerOptions.bind(this))}
                                        </select>}
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer2_name"> Customer 2 Name</label>
                                        <input type="text" className="form-control" id="customer2_name"
                                               name="customer2_name" disabled maxLength="50"
                                               value={this.state.newGroup.selectedCustomers.customer_2.full_name}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer_3"> Customer 3 </label>
                                        {<select className="form-control" name="customer_3" id="customer_3"
                                            // disabled={!this.state.isCenterEntered}
                                                 onChange={(event) => this.handleOnChangeSelectCustomer(event)}>
                                            <option key='0' className="form-control" value='0'>NOT SELECTED</option>
                                            {this.state.customerPool.map(this.handleMapCustomerOptions.bind(this))}
                                        </select>}
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer3_name"> Customer 3 Name</label>
                                        <input type="text" className="form-control" id="customer3_name"
                                               name="customer3_name" disabled maxLength="50"
                                               value={this.state.newGroup.selectedCustomers.customer_3.full_name}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer_4"> Customer 4 </label>
                                        {<select className="form-control" name="customer_4" id="customer_4"
                                            // disabled={!this.state.isCenterEntered}
                                                 onChange={(event) => this.handleOnChangeSelectCustomer(event)}>
                                            <option key='0' className="form-control" value='0'>NOT SELECTED</option>
                                            {this.state.customerPool.map(this.handleMapCustomerOptions.bind(this))}
                                        </select>}
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer4_name"> Customer 4 Name</label>
                                        <input type="text" className="form-control" id="customer4_name"
                                               name="customer4_name" disabled maxLength="50"
                                               value={this.state.newGroup.selectedCustomers.customer_4.full_name}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer_5"> Customer 5 </label>
                                        {<select className="form-control" name="customer_5" id="customer_5"
                                            // disabled={!this.state.isCenterEntered}
                                                 onChange={(event) => this.handleOnChangeSelectCustomer(event)}>
                                            <option key='0' className="form-control" value='0'>NOT SELECTED</option>
                                            {this.state.customerPool.map(this.handleMapCustomerOptions.bind(this))}
                                        </select>}
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <label htmlFor="customer5_name"> Customer 5 Name</label>
                                        <input type="text" className="form-control" id="customer5_name"
                                               name="customer5_name" disabled maxLength="50"
                                               value={this.state.newGroup.selectedCustomers.customer_5.full_name}/>
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