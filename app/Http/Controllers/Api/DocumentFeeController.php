<?php

namespace App\Http\Controllers\Api;

use App\Branch;
use App\Center;
use App\Customer;
use App\DocumentFee;
use App\Loan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Support\Facades\DB;

class DocumentFeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $documentFee = DocumentFee::all();
        return response()->json($documentFee);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $wrongBranchIdResponse = '{success:false,message:\'Branch Id is not match with a current one\'}';
        $wrongCenterIdResponse = '{success:false,message:\'Center Id is not match with a current one\'}';
        $failedOperation = '{success:false, message:\'Operation Failed\'}';
        $successOperation = '{success:true, message:\'Document Fee added successfully\'}';

        DB::beginTransaction();

        try {
            $branch = Branch::where('id', (int)$request['branch_id'])->first();
            if ($branch == null) return response()->json($request['branch_id']);

            $center = Center::where('id', (int)$request['center_id'])->first();
            if ($center == null) return response()->json($wrongCenterIdResponse);

            $loan = Loan::find($request['loan_id']);

            $docFee = new DocumentFee();
            $docFee['customer_id'] = $request['customer_id'];
            $docFee['loan_id'] = $request['loan_id'];
            $docFee['cashier_id'] = $request['cashier_id'];
            $docFee['amount'] = $request['total'];
            $docFee['percentage'] = 0;
            $docFee['date'] = $request['loan_date'];
            $docFee->save();

            $loan['is_settled'] = 1;
            $loan->save();
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json($e);
        }
        DB::commit();
        return response()->json($successOperation);
    }

    public function getLoanDetailsWithNic(string $customer_nic)
    {
        $failedOperation = '{success:false, message:\'Operation Failed\'}';
        $loanNotFound = '{success:false, message:\'Loan Not found\'}';

        try {
//            $customer_nic = $request['nic'];

            $customer = Customer::where('nic', $customer_nic)->first();
            $loans = $customer->loan()->get();

            foreach ($loans as $loan) {
                if ($loan['is_settled'] == 0) {
                    $loan_details['customer_nic'] = $customer_nic;
                    $loan_details['customer_id'] = $customer['id'];
                    $loan_details['customer_name'] = $customer['full_name'];
                    $loan_details['branch_id'] = $loan['branch_id'];
                    $loan_details['center_id'] = $loan['center_id'];
                    $loan_details['loan_number'] = $loan['loan_number'];
                    $loan_details['loan_id'] = $loan['id'];
                    $loan_details['loan_amount'] = $loan['loan_amount'];
                    $loan_details['loan_rate'] = $loan['rate'];
                    $loan_details['loan_date'] = $loan['created_at']->format('Y-m-d');

                    return response()->json($loan_details);
                }
            }
            return response()->json($loanNotFound);
        } catch (Exception $e) {
            return response()->json($failedOperation);
        }
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
