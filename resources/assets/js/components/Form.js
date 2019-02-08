import React, {Component} from 'react';
import '../../css/groups_modal.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    render() {
        return (
            <div className="modal fade show" id={this.props.name}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.title}</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <form onSubmit={this.props.handleOnSubmit.bind(this)}>
                            <div className="modal-body">
                                {this.props.rows.map((row, index) => (
                                    <div key={index} className="row">
                                        {row.map((col, index) => (
                                            col.button ?
                                                <UButton key={index}
                                                         buttonId={col.id}
                                                         buttonName={col.name}
                                                         onClick={col.onClick}
                                                         buttonLabel={col.label}
                                                         colSize={col.colSize}
                                                         buttonClass={col.buttonClass}
                                                         buttonClassOptions={col.buttonClassOptions}
                                                         buttonStyle={col.buttonStyle}/> :
                                                <UInput key={index} label={col.label} id={col.id} name={col.name}
                                                        type={col.type}
                                                        colSize={col.colSize}
                                                        required={col.required}
                                                        pattern={col.pattern}
                                                        message={col.message}
                                                        value={col.value}
                                                        onChange={col.onChange}/>
                                        ))}
                                    </div>
                                ))}
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

// Props (all:10, opt:2): label, id, name, required, pattern, message, value, onChange, colSize, type,
const UInput = (props) => {
    const className = "col-sm-".concat(props.colSize ? props.colSize : "3").concat(" form-group");
    return (
        <div className={className}>
            <label>{props.label}</label>
            <input type={props.type ? props.type : "text"} className="form-control" id={props.id}
                   name={props.name} required={props.required}
                   pattern={props.pattern}
                   title={props.message}
                   value={props.value}
                   onChange={props.onChange ? props.onChange : () => console.log(props.name + " onChange ..")}
            />
        </div>
    )
};

// Props (all:7, opt:2) : buttonId, buttonName, onClick, buttonLabel, colSize, buttonClass, buttonClassOptions, buttonStyle
const UButton = (props) => {
    const className = "col-sm-".concat(props.colSize ? props.colSize : "3").concat(" form-group");
    const buttonClassName = "btn btn-"
        .concat(props.buttonClass ? props.buttonClass : "default")
        .concat(props.buttonClassOptions ? " " + props.buttonClassOptions : " ")
        .concat("form-control");
    const divStyle = {
        marginTop: '28px',
        border: '2px solid green',
        backgroundColor: 'yellow'
    };
    return (
        <div className={className}>
            <button style={props.buttonStyle ? props.buttonStyle : divStyle} id={props.buttonId}
                   name={props.buttonName} className={buttonClassName}
                    onClick={props.onClick} >{props.buttonLabel}</button>
        </div>
    );
};

export default Form;