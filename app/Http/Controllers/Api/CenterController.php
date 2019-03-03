<?php

namespace App\Http\Controllers\Api;

use App\Branch;
use App\Center;
use App\LastCenter;
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
        $centerDetails = array();
        $centers_all = Center::all();
        foreach ($centers_all as $element) {
            $branch = $element->branch()->first();
            $center['id'] = $element['id'];
            $center['branch_id'] = $branch['id'];;
            $center['index'] = $element['index'];
            $center['name'] = $element['name'];
            $center['code'] = $element['code'];
            $center['branch_no'] = $branch['branch_no'];
            $center['branch_name'] = $branch['name'];

            $centerDetails[] = $center;

        }
        return response()->json($centerDetails);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $wrongBranchIdResponse = '{success:false,message:\'Branch Id is not match with a current one\'}';
        $failedOperation = '{operationStatus:failed, message:\'Operation Failed\'}';
        $successOperation = '{operationStatus:success, message:\'Center created successfully\'}';

        DB::beginTransaction();

        try {
            $branch = Branch::find((int)$request['branch_id']);

            //check about the branch
            if ($branch == null) return response()->json($wrongBranchIdResponse);

            $center = new Center();
            $center['index'] = $request['index'];
            $center['branch_id'] = $request['branch_id'];
            $center['code'] = $request['code'];
            $center['name'] = $request['name'];
            $center->save();

            $lastCenter = $branch->lastCenter()->first();
            if ($lastCenter != null) {
                $lastCenter['last_center_index'] = $request['index'];
                $lastCenter['center_id'] = $center['id'];
                $lastCenter->save();
            } else {
                $newLastCenter = new LastCenter();
                $newLastCenter['last_center_index'] = $request['index'];
                $newLastCenter['center_id'] = $center['id'];
                $newLastCenter['branch_id'] = $request['branch_id'];
                $newLastCenter->save();
            }

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
    public function edit(Request $request)
    {
        $failedOperation = '{operationStatus:failed, message:\'Operation Failed\'}';
        $successOperation = '{operationStatus:success, message:\'Center created successfully\'}';

        DB::beginTransaction();

        try {
            $center = Center::findOrFail($request['id']);
            $center['code'] = $request['code'];
            $center['name'] = $request['name'];
            $center->save();
        } catch (Exception $e) {
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
