<?php

namespace App\Http\Controllers\Api;

use App\Branch;
use App\Center;
use App\Customer;
use App\Group;
use App\LastGroup;
use Illuminate\Http\Request;
use \Exception;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $groups = Group::all();
        $groupList = array();

        foreach ($groups as $element) {
            $br = $element->branch()->first();
            $ce = $element->center()->first();
            $customerList = $element->customer()->get();

            $group['index'] = $element['index'];
            $group['branch_name'] = $br['name'];
            $group['center_name'] = $ce['name'];
            $group['branch_id'] = $element['branch_id'];
            $group['center_id'] = $element['center_id'];
            $group['customer_list'] = $customerList;

            $groupList[] = $group;
        }
        return response()->json($groupList);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function _create(Request $request)
    {
        return response()->json($request);
    }

    public function create(Request $request)
    {
        DB::beginTransaction();

        //Create the Group
        try {
            $branch = Branch::where('id', (int)$request['branch_id'])->first();
            $center = Center::where('id', (int)$request['center_id'])->first();

            $success_msg = 'Group Adding Successful branch_id:' . $branch['id'] . ' center_id:' . $center['id'];
            $failed_msg = 'Group Adding Failed. branch_id:' . $branch['id'] . ' center_id:' . $center['id'];
            if ($branch == null or $center == null) {
                return response($failed_msg);
            }
            //Customers
            $customers = array();
            $customers[] = $request['$customer1_id'];
            $customers[] = $request['$customer2_id'];
            $customers[] = $request['$customer3_id'];
            $customers[] = $request['$customer4_id'];
            $customers[] = $request['$customer5_id'];

            //Check for same customer
            foreach ($customers as $customer1) {
                foreach ($customers as $customer2) {
                    if ($customer1 == $customer2) {
                        return response('Please Do not assign the same NIC for a one group');
                    }
                }
            }
            //Group
            $group = new Group();
            $group['branch_id'] = $branch['id'];
            $group['center_id'] = $center['center_id'];
            $group['index'] = $center['center_name'];
            $group->save();

            $center = $group->center()->first();
            $lastGroup = $center->lastGroup()->first();
            if ($lastGroup != null) {
                $lastGroup['last_group_index'] = $request['index'];
                $lastGroup['group_id'] = $group['id'];
                $lastGroup->save();
            } else {
                $newLastGroup = new LastGroup();
                $newLastGroup['last_group_index'] = $request['index'];
                $newLastGroup['center_id'] = $group['center_id'];
                $newLastGroup['group_id'] = $group['id'];
                $newLastGroup->save();
            }

            foreach ( $customers as $customer_id){
                $customer =  Customer::findOrFail($customer_id);
                $customer['group_id'] = $group['id'];
                $customer->save();
            }
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json($failed_msg);
        }
        return response()->json($success_msg);
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
