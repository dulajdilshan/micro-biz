<?php

namespace App\Http\Controllers\Api;

use App\Branch;
use App\Center;
use App\Customer;
use App\Group;
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
    public function create(Request $request)
    {
        DB::beginTransaction();

        //Get last group
        try {
            $next_group_id = Group::all()->last()['id'] + 1;
            if ($next_group_id == null) $next_group_id = 1;
        } catch (Exception $e) {
            return redirect('manager-groups');
        }

        //Create the Group
        try {
            $branch = Branch::where('id', (int)$request['branch_id'])->first();
            $center = Center::where('center_code', $request['center_code'])->first();

            $success_msg = 'Group Adding Successful branch_id:' . $branch['id'] . ' center_id:' . $center['id'];
            $failed_msg = 'Group Adding Failed. branch_id:' . $branch['id'] . ' center_id:' . $center['id'];
            if ($branch == null or $center == null) {
                return response($failed_msg);
            }
            $group = new Group();
            $group['branch_id'] = $branch['id'];
            $group['center_code'] = $center['center_code'];
            $group['center_name'] = $center['center_name'];
            $group->save();
        } catch (Exception $e) {
            DB::rollBack();
            return redirect('manager-groups');
        }

        //Assigning groups for the ungrouped customers
        $customer1_id = $request['selectedCustomers']['customer_1']['id'];
        $customer2_id = $request['selectedCustomers']['customer_2']['id'];
        $customer3_id = $request['selectedCustomers']['customer_3']['id'];
        $customer4_id = $request['selectedCustomers']['customer_4']['id'];
        $customer5_id = $request['selectedCustomers']['customer_5']['id'];

        $ungrouped_customer_ids = [$customer1_id, $customer2_id, $customer3_id, $customer4_id, $customer5_id];

        try {
            for ($i = 0; $i < count($ungrouped_customer_ids); $i++) {
                $customer = Customer::where('id', $ungrouped_customer_ids[$i])->first();
                $customer['group_id'] = $next_group_id;
                $customer->save();
            }
        } catch (Exception $e) {
            DB::rollBack();
            return redirect('manager-groups');
        }
        DB::commit();
        return response($success_msg);
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
