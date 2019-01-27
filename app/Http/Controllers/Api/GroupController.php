<?php

namespace App\Http\Controllers\Api;

use App\Branch;
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
        $group = Group::all();
        return response()->json($group);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        DB::beginTransaction();
        try {
            $branch = Branch::where('id', $request['branch_id'])->first();
            if ($branch==null){
                return response('Error');
            }
        }catch (Exception $e){
            DB::rollBack();
            return redirect('manager-groups');
        }
        

        //Save the Created Group
        $group = new Group();
        $ungrouped_customers = Customer::where('group_id', 0)->get();

        $customer1 = $request['selectedCustomers']['customer_1'];
        $customer2 = $request['selectedCustomers']['customer_2'];
        $customer3 = $request['selectedCustomers']['customer_3'];
        $customer4 = $request['selectedCustomers']['customer_4'];
        $customer5 = $request['selectedCustomers']['customer_5'];
        return response()->json($request['selectedCustomers']['customer_1']);
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
