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
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $customer = new Customer();
        $customer['nic'] = '908968345v';
        $customer['first_name'] = 'First Name';
        $customer['last_name'] = 'Last Name';
        $customer['full_name'] = 'First Name Last Name';
        $customer['name_prefix'] = 'Mr';
        $customer['birthday'] = '1990-06-20';
        $customer['age'] = 12;
        $customer['gender'] = 'male';
        $customer['married'] = 1;
        $customer['contact_no1'] = '089877';
        $customer['contact_no2'] = '332333';
        $customer['address_1'] = 'AFSFASF';
        $customer['address_2'] = 'ddddd';
        $customer['gs_division'] = 'ddd';
        $customer['group_id'] = 1;
        $customer['center_id'] = 2;
        $customer['branch_id'] = 2;
        $customer['center_code'] = 's';
        $customer['center_name'] = 's';
        $customer['is_loan_settled'] = 0;
        return response()->json($customer);
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
