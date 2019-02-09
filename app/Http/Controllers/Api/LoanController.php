<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Loan;
use App\Http\Controllers\Controller;

class LoanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $loans = Loan::all();
        return response()->json($loans);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $loan = new Loan();
        $loan['loan_number'] = $request['loan_number'];
        $loan['customer_id'] = $request['customer_id'];
        $loan['group_id'] = $request['group_id'];
        $loan['branch_id'] = $request['branch_id'];
        $loan['center_id'] = $request['center_id'];
        $loan['cashier_id'] = $request['cashier_id'];
        $loan['is_settled'] = $request['is_settled'];
        $loan['is_approved'] = $request['is_approved'];
        $loan['loan_amount'] = $request['loan_amount'];
        $loan['net_amount'] = $request['net_amount'];
        $loan['rate'] = $request['rate'];
        $loan['weeks'] = $request['weeks'];
        $loan['remaining_weeks'] = $request['remaining_weeks'];
        $loan['paid_weeks'] = $request['paid_weeks'];
        $loan['weekly_installment']['weekly_installment'];
        $loan['paid_amount'] = $request['paid_amount'];
        $loan['balance'] = $request['balance'];
        $loan['next_payment_date'] = $request['next_payment_date'];
        $loan['obtained_date'] = $request['obtained_date'];
        $loan['end_date'] = $request['end_date'];
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
