<?php

namespace App\Http\Controllers\Api;

use App\Customer;
use App\GsDivision;
use App\Http\Controllers\Controller;
use App\LastCustomer;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
            $customer['id'] = $element['id'];
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
        $failedOperation = '{operationStatus:failed, message:\'Operation Failed\'}';
        $successOperation = '{operationStatus:success, message:\'Center created successfully\'}';

        DB::beginTransaction();

        try {
            $gs_division = GsDivision::where('name', $request['gs_division_name'])->first();
            if ($gs_division == null) {
                $gs_division = new GsDivision();
                $gs_division['name'] = $request['gs_division_name'];
                $gs_division['table'] = $request['branch_id'];
                $gs_division->save();
            }
            $customer = new Customer();

            $full_name = $request['first_name'] . " " . $request['last_name'] . " " . $request['name_initials'];
            $customer['nic'] = $request['nic'];
            $customer['customer_no'] = $request['customer_no'];
            $customer['index'] = $request['index'];
            $customer['center_id'] = $request['center_id'];
            $customer['branch_id'] = $request['branch_id'];
            $customer['group_id'] = 0;
            $customer['first_name'] = $request['first_name'];
            $customer['last_name'] = $request['last_name'];
            $customer['name_initials'] = $request['name_initials'];
            $customer['full_name'] = $full_name;
            $customer['birthday'] = $request['birthday'];
            $customer['age'] = $request['age'];
            $customer['gender'] = $request['gender'];
            $customer['married'] = $request['married'];
            $customer['phone1'] = $request['phone1'];
            $customer['phone2'] = $request['phone2'];
            $customer['address_1'] = $request['address_1'];
            $customer['address_2'] = $request['address_2'];
            $customer['gs_division_id'] = $gs_division['id'];
            $customer['has_active_loan'] = 0;
            $customer->save();

            $center = $customer->center()->first();
            $lastCustomer = $center->lastCustomer()->first();
            if ($lastCustomer != null) {
                $lastCustomer['last_customer_index'] = $request['index'];
                $lastCustomer['customer_id'] = $customer['id'];
                $lastCustomer->save();
            } else {
                $newLastCustomer = new LastCustomer();
                $newLastCustomer['last_customer_index'] = $request['index'];
                $newLastCustomer['center_id'] = $customer['center_id'];
                $newLastCustomer['customer_id'] = $customer['id'];
                $newLastCustomer->save();
            }
        } catch (Exception $exception) {
            DB::rollBack();
            return response()->json($newLastCustomer);
        }
        DB::commit();
        return response()->json($successOperation);
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
    public function edit(Request $request)
    {
        $failedOperation = '{operationStatus:failed, message:\'Operation Failed\'}';
        $successOperation = '{operationStatus:success, message:\'Center created successfully\'}';

        DB::beginTransaction();

        try {
            $customer = Customer::findOrFail($request['id']);
            $gs_division = GsDivision::where('name', $request['gs_division_name'])->first();
            if ($gs_division == null) {
                $gs_division = new GsDivision();
                $gs_division['name'] = $request['gs_division_name'];
                $gs_division['table'] = $request['branch_id'];
                $gs_division->save();
            }

            $full_name = $request['first_name'] . " " . $request['last_name'] . " " . $request['name_initials'];
            $customer['nic'] = $request['nic'];
            $customer['customer_no'] = $request['customer_no'];
            $customer['index'] = $request['index'];
            $customer['center_id'] = $request['center_id'];
            $customer['branch_id'] = $request['branch_id'];
            $customer['group_id'] = 0;
            $customer['first_name'] = $request['first_name'];
            $customer['last_name'] = $request['last_name'];
            $customer['name_initials'] = $request['name_initials'];
            $customer['full_name'] = $full_name;
            $customer['birthday'] = $request['birthday'];
            $customer['age'] = $request['age'];
            $customer['gender'] = $request['gender'];
            $customer['married'] = $request['married'];
            $customer['phone1'] = $request['phone1'];
            $customer['phone2'] = $request['phone2'];
            $customer['address_1'] = $request['address_1'];
            $customer['address_2'] = $request['address_2'];
            $customer['gs_division_id'] = $gs_division['id'];
            $customer['has_active_loan'] = 0;
            $customer->save();
        } catch (Exception $exception) {
            DB::rollBack();
            return response()->json($failedOperation);
        }
        DB::commit();
        return response()->json($successOperation);
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


        $failedOperation = '{operationStatus:failed, message:\'Operation Failed\'}';
        $successOperation = '{operationStatus:success, message:\'Center created successfully\'}';

        DB::beginTransaction();

        try {
            $customer = Customer::findOrFail($id);
            $lastCustomer = $customer->lastCustomer()->first();
            if ($lastCustomer != null) {
                $center = $customer->center()->first();
                $customerList = $center->customer()->where('id', '!=', $id)->get();
                if (sizeof($customerList) > 0) {
                    $maxId = 0;
                    foreach ($customerList as $element) {
                        if ($element['id'] > $maxId) {
                            $maxId = $element['id'];
                            $newLastCustomer = $element;
                        }
                    }
                    $lastCustomer['customer_id'] = $maxId;
                    $lastCustomer['last_customer_index'] = $newLastCustomer['index'];
                    $lastCustomer->save();
                } else {
                    $lastCustomer->delete();
                }

            }
            $customer->delete();
        } catch (Exception $exception) {
            DB::rollBack();
            return response()->json($failedOperation);
        }
        DB::commit();
        return response()->json($successOperation);
    }
}
