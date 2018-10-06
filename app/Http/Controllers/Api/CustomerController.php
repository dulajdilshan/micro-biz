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
//        $customer = new Customer();
//        $customer['nic'] = $request['nic'];
//        $customer['first_name'] =
//        $customer['last_name'] =
//        $customer['full_name'] =
//        $customer['name_prefix'] =
//        $customer['birthday'] =
//        $customer['age'] =
//        $customer['gender'] =
//        $customer['married'] =
//        $customer['contact_no1'] =
//        $customer['contact_no2'] =
//        $customer['address_1'] =
//        $customer['address_2'] =
//        $customer['gs_division'] =
//        $customer['group_id'] =
//        $customer['center_id'] =
//        $customer['branch_id'] =
//        $customer['center_code'] =
//        $customer['center_name'] =
//        $customer['is_loan_settled'] =
//        return response()->json($customer);
        return response()->json($request);
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
