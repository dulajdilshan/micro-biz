<?php

namespace App\Http\Controllers\Api;

use App\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $customers = Customer::all();
        return response()->json($customers);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $customer = new Customer();
        $customer['nic'] = $request['nic'];
        $customer['first_name'] =$request['first_name'];
        $customer['last_name'] =$request['last_name'];
        $customer['full_name'] =$request['full_name'];
        $customer['name_prefix'] =$request['name_prefix'];
        $customer['birthday'] =$request['birthday'];
        $customer['age'] =$request['age'];
        $customer['gender'] =$request['gender'];
        $customer['married'] =$request['married'];
        $customer['contact_no1'] =$request['contact_no1'];
        $customer['contact_no2'] =$request['contact_no2'];
        $customer['address_1'] =$request['address_1'];
        $customer['address_2'] =$request['address_2'];
        $customer['gs_division'] =$request['gs_division'];
        $customer['group_id'] =$request['group_id'];
        $customer['center_id'] =$request['center_id'];
        $customer['branch_id'] =$request['branch_id'];
        $customer['center_code'] =$request['center_code'];
        $customer['center_name'] =$request['center_name'];
        $customer['is_loan_settled'] =$request['is_loan_settled'];
//        $customer->save();
        return response()->json($customer);
//        return response()->json($request);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return response();
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response();
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
        return response();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return response();
    }

    public function getAllWithNoGroup()
    {
        $customersWithNoGroup = Customer::where('group_id', '=', '0')->get();
        return response()->json($customersWithNoGroup);
    }
}
