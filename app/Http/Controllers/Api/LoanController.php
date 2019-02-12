<?php

namespace App\Http\Controllers\Api;

use App\Branch;
use App\Center;
use App\Customer;
use App\Http\Controllers\Controller;
use App\Loan;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LoanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $loans_all = Loan::all();
        $loan_list = array();
        foreach ($loans_all as $element) {
            $loan_customer = Customer::where('id', $element['customer_id'])->first();

            $loan['id'] = $element['id'];
            $loan['loan_number'] = $element['loan_number'];
            $loan['nic'] = $loan_customer['nic'];
            $loan['customer_name'] = $loan_customer['full_name'];
            $loan['customer_id'] = $element['customer_id'];
            $loan['loan_amount'] = $element['loan_amount'];
            $loan['rate'] = $element['rate'];
            $loan['net_amount'] = $element['net_amount'];
            $loan['weeks'] = $element['weeks'];
            $loan['balance'] = $element['balance'];

            $loan_list[] = $loan;
        }
        return response()->json($loan_list);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $wrongBranchIdResponse = '{success:false,message:\'Branch Id is not match with a current one\'}';
        $wrongCenterIdResponse = '{success:false,message:\'Center Id is not match with a current one\'}';
        $failedOperation = '{success:false, message:\'Operation Failed\'}';
        $successOperation = '{success:true, message:\'Loan added successfully\'}';

        DB::beginTransaction();

        try {
            $branch = Branch::where('id', (int)$request['branch_id'])->first();
            if ($branch == null) return response()->json($wrongBranchIdResponse);

            $center = Center::where('id', (int)$request['center_id'])->first();
            if ($center == null) return response()->json($wrongCenterIdResponse);

            $loan = new Loan();
            $customer = Customer::find($request['customer_id']);

            $loan['loan_number'] = $request['loan_number'];
            $loan['customer_id'] = $request['customer_id'];
            $loan['group_id'] = $request['group_id'];
            $loan['branch_id'] = $request['branch_id'];
            $loan['center_id'] = $request['center_id'];
            $loan['cashier_id'] = $request['user_id'];
            $loan['is_settled'] = 0;
            $loan['is_approved'] = 0;
            $loan['loan_amount'] = $request['loan_amount'];
            $loan['net_amount'] = $request['net_amount'];
            $loan['rate'] = $request['rate'];
            $loan['weeks'] = $request['weeks'];
            $loan['remaining_weeks'] = $request['weeks'];
            $loan['paid_weeks'] = 0;
            $loan['weekly_installment'] = $request['weekly_installment'];
            $loan['paid_amount'] = 0;
            $loan['balance'] = $request['net_amount'];
            $loan['next_payment_date'] = $request['obtained_date'];
            $loan['obtained_date'] = $request['obtained_date'];
            $loan['end_date'] = $request['obtained_date'];
            $loan->save();

            $customer['is_loan_settled'] = 0;
            $customer->save();
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json($failedOperation, $e);
        }
        DB::commit();
        return response()->json($successOperation);
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
