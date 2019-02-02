<?php

namespace App\Http\Controllers\Api;

use App\Branch;
use App\Center;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use \Exception;
use phpDocumentor\Reflection\DocBlock\Tags\Return_;

class CenterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $centers = Center::all();
        return response()->json($centers);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $wrongBranchIdResponse = '{success:false,message:\'Branch Id is not match with a current one\'}';
        $failedOperation = '{success:false, message:\'Operation Failed\'}';
        $successOperation = '{success:true, message:\'Center created successfully\'}';

        DB::beginTransaction();

        try {
            $branch = Branch::where('id', (int)$request['branch_id'])->first();

            //check about the branch
            if ($branch == null) return response()->json($wrongBranchIdResponse);

            $center = new Center();
            $center['branch_id'] = $request['branch_id'];
            $center['center_code'] = $request['center_code'];
            $center['center_name'] = $request['center_name'];
            $center->save();
        } catch (Exception $exception) {
            DB::rollBack();
            return response()->json($failedOperation);
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
