<?php

namespace App\Http\Controllers\Api;

use App\Payment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
