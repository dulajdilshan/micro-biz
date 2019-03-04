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
        $customerList = array();

        foreach ($customers as $element) {
            $customer['branch_id'] = $element['branch_id'];
            $customer['center_id'] = $element['center_id'];
            $customer['index'] = $element['index'];
            $customer['customer_no'] = $element['customer_no'];
            $customer['nic'] = $element['nic'];
            $customer['gs_division_id'] = $element['gs_division_id'];
            $customer['age'] = $element['age'];
            $customer['birthday'] = $element['birthday'];
            $customer['gender'] = $element['gender'];
            $customer['married'] = $element['married'];
            $customer['name_initials'] = $element['name_initials'];
            $customer['first_name'] = $element['first_name'];
            $customer['last_name'] = $element['last_name'];
            $customer['full_name'] = $element['full_name'];
            $customer['phone1'] = $element['phone1'];
            $customer['phone2'] = $element['phone2'];
            $customer['address_1'] = $element['address_1'];
            $customer['address_2'] = $element['address_2'];
            $customer['group_id'] = $element['group_id'];
            $customer['has_active_loan'] = $element['has_active_loan'];

            $br = $element->branch()->first();
            $ce = $element->center()->first();
            $gs = $element->gsDivision()->first();
            $group = $element->group()->first();
            $customer['branch_name'] = $br['name'];
            $customer['branch_no'] = $br['branch_no'];
            $customer['center_name'] = $ce['name'];
            $customer['center_no'] = $ce['index'];
            $customer['group_index'] = $group['index'];
            $customer['gs_division_name'] = $gs['name'];

            $customerList[] = $customer;
        }

        return response()->json($customerList);
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
        $customer['first_name'] = $request['first_name'];
        $customer['last_name'] = $request['last_name'];
        $customer['full_name'] = $request['full_name'];
        $customer['name_prefix'] = $request['name_prefix'];
        $customer['birthday'] = $request['birthday'];
        $customer['age'] = $request['age'];
        $customer['gender'] = $request['gender'];
        $customer['married'] = $request['married'];
        $customer['contact_no1'] = $request['contact_no1'];
        $customer['contact_no2'] = $request['contact_no2'];
        $customer['address_1'] = $request['address_1'];
        $customer['address_2'] = $request['address_2'];
        $customer['gs_division'] = $request['gs_division'];
        $customer['group_id'] = 0;
        $customer['center_id'] = $request['center_id'];
        $customer['branch_id'] = $request['branch_id'];
        $customer['center_code'] = $request['center_code'];
        $customer['center_name'] = $request['center_name'];
        $customer['is_loan_settled'] = 1;
        $customer->save();
//        return response()->json($customer);
        return redirect('/manager-customers');
    }

    /**
     * Get group-less customers
     * @return \Illuminate\Http\Response
     */
    public function getGrouplessCustomers()
    {
        $customers = Customer::where('group_id', '=', 0)->get();
        return response()->json($customers);
    }

    /**
     * Get customers who have settled loans or no loans
     * @return \Illuminate\Http\Response
     */
    public function getCustomersWithNoLoans()
    {
        $customers = Customer::where('is_loan_settled', 1)->where('group_id', '>', 0)->get();
        return response()->json($customers);
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
}
