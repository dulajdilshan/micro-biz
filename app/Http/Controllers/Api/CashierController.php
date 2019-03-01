<?php

namespace App\Http\Controllers\Api;

use App\Branch;
use App\Cashier;
use App\Center;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Exception;

class CashierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cashiers = Cashier::all();
        return response()->json($cashiers);
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
        $successOperation = '{success:true, message:\'Cashier added successfully\'}';

        DB::beginTransaction();

        try {
            $branch = Branch::where('id', (int)$request['branch_id'])->first();
            if ($branch == null) return response()->json($wrongBranchIdResponse);

            $center = Center::where('id', (int)$request['center_id'])->first();
            if ($center == null) return response()->json($wrongCenterIdResponse);

            $cashier = new Cashier();
            $cashier['branch_id'] = $request['branch_id'];
            $cashier['user_id'] = $request['user_id'];
            $cashier['center_id'] = $request['center_id'];
            $cashier['full_name'] = $request['full_name'];
            $cashier['nic'] = $request['nic'];
            $cashier['gs_division'] = $request['gs_division'];
            $cashier['birthday'] = $request['birthday'];
            $cashier['age'] = $request['age'];
            $cashier['contact_no'] = $request['contact_no'];
            $cashier['address'] = $request['address'];
            $cashier->save();

        }catch (Exception $e){
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
