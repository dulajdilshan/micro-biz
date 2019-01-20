import React, {Component} from 'react';
import '../../css/groups_modal.css'

class GroupForm extends Component {
    constructor(props) {
        super(props)
    }

    handleOnSubmit(event) {
        event.preventDefault();       //This makes not to load again
        let retConfirm = confirm('Are you sure you want to add this group?');
        if (retConfirm) {
            $('#newGroupForm').modal('hide');
            console.log(this.state.newGroup);
            axios.post('/api/group/create', this.state.newGroup)
                .then(res => alert("Group Added Successfully"))
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
                                
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary"
                                        onClick={this.handleOnSubmit.bind(this)}>ADD
                                </button>
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