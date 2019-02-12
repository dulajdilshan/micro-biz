<?php

namespace App\Http\Controllers\Api;

use App\Customer;
use App\Payment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Exception;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $payments = Payment::all();
        $nPayments = [];
        foreach ($payments as $payment) {
            $customer = $payment->customer()->first();
            $loan = $payment->loan()->first();

            $pay['loan_number'] = $loan['loan_number'];
            $pay['nic'] = $customer ['nic'];
            $pay['customer_name'] = $customer['full_name'];
            $pay['group_id'] = $customer['group_id'];
            $pay['amount'] = $payment['amount'];
            $pay['for_week'] = $payment['for_week'];
            $pay['payment_date'] = $payment['created_at']->format('m-d-Y');
            $nPayments[] = $pay;
        }
        return response()->json($nPayments);
    }

    public function getDetailsWithNic(string $customer_nic)
    {
        $failedOperation = '{success:false, message:\'Operation Failed\'}';
        $loanNotFound = '{success:false, message:\'Loan Not found\'}';

        try {
            $customer = Customer::where('nic', $customer_nic)->first();
            $loans = $customer->loan()->get();

            foreach ($loans as $loan) {
                if ($loan['is_settled'] == 1) {
                    $payment_details['customer_nic'] = $customer_nic;
                    $payment_details['customer_name'] = $customer['full_name'];
                    $payment_details['branch_id'] = $loan['branch_id'];
                    $payment_details['group_id'] = $customer['group_id'];
                    $payment_details['center_id'] = $loan['center_id'];
                    $payment_details['loan_number'] = $loan['loan_number'];
                    $payment_details['net_amount'] = $loan['net_amount'];
                    $payment_details['weekly_installment'] = $loan['weekly_installment'];
                    $payment_details['to_be_paid'] = (int)$loan['net_amount'] - (int)$loan['paid_amount'];
                    $payment_details['remaining_weeks'] = $loan['remaining_weeks'];
                    $payment_details['for_week'] = (int)$loan['paid_weeks'] + 1;

                    return response()->json($payment_details);
                }
            }
            return response()->json($loanNotFound);
        } catch (Exception $e) {
            return response()->json($failedOperation);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
