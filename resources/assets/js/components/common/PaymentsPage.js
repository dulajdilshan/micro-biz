import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-table/react-table.css";
import DataTable from "../DataTable";
import Form from "../Form";
import axios from "axios";

export default class PaymentsPage extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            newPayment: {},
            newDocumentFee: {
                customer_id: '', loan_id: '', cashier_id: '', amount: '', percentage: '',
                customer_nic: '', customer_name: '', loan_number: '', lona_amount: '', loan_rate: '', loan_date: '',
                branch_id: '', center_id: '', group_id: '',
                member_fee: '', risk_fee: '', doc_charge: '', insurance_charge: '', total: ''
            }
        };
        this.state = {
            paymentTableData: [],
            paymentTable: {
                columns: [
                    {Header: 'Loan Number', accessor: 'loan_number'},
                    {Header: 'NIC', accessor: 'nic'},
                    {Header: 'Customer Name', accessor: 'customer_name'},
                    {Header: 'Group ID', accessor: 'group_id'},
                    {Header: 'Amount', accessor: 'amount'},
                    {Header: 'For Week', accessor: 'for_week'},
                    {Header: 'Payment Date', accessor: 'payment_date'},
                ],
                dummyPaymentTableData: [
                    {
                        loan_number: '1/1/2',
                        nic: '976745623v',
                        customer_name: 'Satya Nadella',
                        group_id: 3,
                        amount: '2300',
                        for_week: 14,
                        payment_date: '2018-12-22 16:24:44'
                    }
                ],
            },
            newPayment: {},
            newDocumentFee: {
                customer_id: '', loan_id: '', cashier_id: '', amount: '', percentage: '',
                customer_nic: '', customer_name: '', loan_number: '', lona_amount: '', loan_rate: '', loan_date: '',
                branch_id: '', center_id: '', group_id: '',
                member_fee: '', risk_fee: '', doc_charge: '', insurance_charge: '', total: ''
            }
        };
    }

    componentDidMount() {
        axios.get('/api/payments')
            .then(res => {
                this.setState({paymentTableData: res.data});
            })
            .catch(err => {
                console.log(err);
                alert("Payments loading failed !! server may be down ..try starting the server and reload the page again");
            });
    }

    handleAddDocumentFeeOnSubmit() {
        console.log("Submitting. ...")
    }

    handleAddPaymentOnSubmit() {
        console.log("Submitting. ...")
    }

    render() {
        const newPaymentFormStructure = [[], []];
        const newDocumentFeeFormStructure = [[
            {
                label: "Customer NIC",
                id: "customer_nic",
                name: "customer_nic",
                required: true,
                // pattern: "^[0-9]+$",
                message: "NIC Only",
                value: this.state.newDocumentFee.customer_nic,
                onChange: (event) =>
                    this.setState({
                        newDocumentFee: Object.assign({}, this.state.newDocumentFee, {customer_nic: event.target.value})
                    }),
            }, {
                label: "Customer Name",
                id: "customer_name",
                name: "customer_name",
                required: true,
                disabled:true,
                colSize: 4,
                // pattern: "^[0-9]+$",
                message: "NIC Only",
                value: this.state.newDocumentFee.customer_name,
                onChange: (event) =>
                    this.setState({
                        newDocumentFee: Object.assign({}, this.state.newDocumentFee, {customer_name: event.target.value})
                    }),
            }, {
                button: true,
                label: "Fill Form",
                id: "btn_form_fill",
                name: "btn_form_fill",
                onClick: () => {
                    console.log("Filling Form.......");
                    axios.get('/api/document-fees/get-details-with-nic/'.concat(this.state.newDocumentFee.customer_nic))
                        .then(res => {
                            console.log(res.data);
                            this.setState({newDocumentFee:res.data});
                        })
                        .catch(error => alert("[ FAILED ] Details NOT Added"));
                }
            }, {
                label: "Branch ID",
                id: "branch_id",
                name: "branch_id",
                required: true,
                disabled:true,
                colSize: '2',
                // pattern: "^[0-9]+$",
                message: "NIC Only",
                value: this.state.newDocumentFee.branch_id,
                onChange: (event) =>
                    this.setState({
                        newDocumentFee: Object.assign({}, this.state.newDocumentFee, {branch_id: event.target.value})
                    }),
            }], [
            {
                label: "Center ID",
                id: "center_id",
                name: "center_id",
                required: true,
                colSize: '2',
                disabled:true,
                // pattern: "^[0-9]+$",
                message: "NIC Only",
                value: this.state.newDocumentFee.center_id,
                onChange: (event) =>
                    this.setState({
                        newDocumentFee: Object.assign({}, this.state.newDocumentFee, {center_id: event.target.value})
                    }),
            }, {
                label: "Loan Number",
                id: "loan_number",
                name: "loan_number",
                required: true,
                colSize: '2',
                disabled:true,
                // pattern: "^[0-9]+$",
                message: "NIC Only",
                value: this.state.newDocumentFee.loan_number,
                onChange: (event) =>
                    this.setState({
                        newDocumentFee: Object.assign({}, this.state.newDocumentFee, {loan_number: event.target.value})
                    }),
            }, {
                label: "Loan Amount",
                id: "loan_amount",
                name: "loan_amount",
                required: true,
                colSize: '2',
                disabled:true,
                // pattern: "^[0-9]+$",
                message: "NIC Only",
                value: this.state.newDocumentFee.loan_amount,
                onChange: (event) =>
                    this.setState({
                        newDocumentFee: Object.assign({}, this.state.newDocumentFee, {loan_amount: event.target.value})
                    }),
            }, {
                label: "Loan Rate",
                id: "loan_rate",
                name: "loan_rate",
                required: true,
                colSize: '2',
                disabled:true,
                // pattern: "^[0-9]+$",
                message: "NIC Only",
                value: this.state.newDocumentFee.loan_rate,
                onChange: (event) =>
                    this.setState({
                        newDocumentFee: Object.assign({}, this.state.newDocumentFee, {loan_rate: event.target.value})
                    }),
            }, {
                label: "Loan Date",
                id: "loan_date",
                name: "loan_date",
                required: true,
                disabled:true,
                colSize: '4',
                // pattern: "^[0-9]+$",
                message: "NIC Only",
                value: this.state.newDocumentFee.loan_date,
                onChange: (event) =>
                    this.setState({
                        newDocumentFee: Object.assign({}, this.state.newDocumentFee, {loan_date: event.target.value})
                    }),
            }], [
            {
                label: "Member Fee",
                id: "member_fee",
                name: "member_fee",
                type: 'number',
                required: true,
                pattern: "^[0-9]+$",
                message: "Number Only",
                value: this.state.newDocumentFee.member_fee,
                onChange: (event) =>
                    this.setState({
                        newDocumentFee: Object.assign({}, this.state.newDocumentFee, {member_fee: event.target.value})
                    }),
            }, {
                label: "Risk Fee",
                id: "risk_fee",
                name: "risk_fee",
                type: 'number',
                required: true,
                pattern: "^[0-9]+$",
                message: "Number Only",
                value: this.state.newDocumentFee.risk_fee,
                onChange: (event) =>
                    this.setState({
                        newDocumentFee: Object.assign({}, this.state.newDocumentFee, {risk_fee: event.target.value})
                    }),
            }, {
                label: "Document Charges",
                id: "doc_charge",
                name: "doc_charge",
                type: 'number',
                required: true,
                pattern: "^[0-9]+$",
                message: "Number Only",
                value: this.state.newDocumentFee.doc_charge,
                onChange: (event) =>
                    this.setState({
                        newDocumentFee: Object.assign({}, this.state.newDocumentFee, {doc_charge: event.target.value})
                    }),
            }, {
                label: "Insurance Charges",
                id: "insurance_charge",
                name: "insurance_charge",
                type: 'number',
                required: true,
                pattern: "^[0-9]+$",
                message: "Number Only",
                value: this.state.newDocumentFee.insurance_charge,
                onChange: (event) =>
                    this.setState({
                        newDocumentFee: Object.assign({}, this.state.newDocumentFee, {insurance_charge: event.target.value})
                    }),
            }
        ], [
            {
                button: true,
                label: "Calculate Total",
                id: "calculate_total",
                name: "calculate_total",
                onClick: () => {
                    let member_fee = this.state.newDocumentFee.member_fee;
                    let risk_fee = this.state.newDocumentFee.risk_fee;
                    let doc_charge = this.state.newDocumentFee.doc_charge;
                    let insurance_charge = this.state.newDocumentFee.insurance_charge;
                    let total = parseInt(member_fee.length > 0 ? member_fee : '0')
                        + parseInt(risk_fee.length > 0 ? risk_fee : '0')
                        + parseInt(doc_charge.length > 0 ? doc_charge : '0')
                        + parseInt(insurance_charge.length > 0 ? insurance_charge : '0');
                    this.setState({
                        newDocumentFee: Object.assign({}, this.state.newDocumentFee, {total: total})
                    })
                }
            }, {
                label: "Total",
                id: "total",
                name: "total",
                required: true,
                disabled:true,
                // pattern: "^[0-9]+$",
                message: "NIC Only",
                value: this.state.newDocumentFee.total,
                onChange: (event) =>
                    this.setState({
                        newCashier: Object.assign({}, this.state.newDocumentFee, {total: event.target.value})
                    }),
            }
        ]];
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <button className="btn btn-secondary btn-lg" data-target="#newPaymentForm" data-toggle="modal"
                                onClick={() => this.setState({newPayment: this.initialState.newPayment})}> New Payment
                        </button>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-secondary btn-lg" data-target="#newDocumentFeeForm"
                                data-toggle="modal"
                                onClick={() => this.setState({newDocumentFee: this.initialState.newDocumentFee})}>
                            New Document Payment
                        </button>
                    </div>
                </div>
                <br/>
                <br/>
                <DataTable columns={this.state.paymentTable.columns}
                           data={this.state.paymentTable.dummyPaymentTableData}/>
                <Form name="newPaymentForm" title="Add Payment" rows={newPaymentFormStructure}
                      handleOnSubmit={this.handleAddPaymentOnSubmit.bind(this)}/>
                <Form name="newDocumentFeeForm" title="Add Document Fee" rows={newDocumentFeeFormStructure}
                      handleOnSubmit={this.handleAddDocumentFeeOnSubmit.bind(this)}/>
            </div>
        );
    }
}

if (document.getElementById('payments-page')) {
    ReactDOM.render(<PaymentsPage/>, document.getElementById('payments-page'));
}
