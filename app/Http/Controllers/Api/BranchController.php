<?php

namespace App\Http\Controllers\Api;

use App\Branch;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use \Exception;

class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $branches = Branch::all();
        return response()->json($branches);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $failedOperation = '{operationStatus:failed, message:\'Operation Failed\'}';
        $successOperation = '{operationStatus:success, message:\'Center created successfully\'}';

        DB::beginTransaction();

        try {
            $branchWithSameIndex = Branch::where('index', $request['index'])->get();
            $branchWithSameBranchNo = Branch::where('branch_no', $request['branch_no'])->get();

            if (sizeof($branchWithSameBranchNo) > 0 or sizeof($branchWithSameIndex) > 0) {
                return response()->json($failedOperation);
            } else {
                $branch = new Branch();
                $branch['index'] = $request['index'];
                $branch['branch_no'] = $request['branch_no'];
                $branch['code'] = $request['code'];
                $branch['name'] = $request['name'];
                $branch['town'] = $request['town'];
                $branch->save();
            }
        } catch (Exception $e) {
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
            $branch = Branch::findOrFail($request['id']);
            $branch['index'] = $request['index'];
            $branch['branch_no'] = $request['branch_no'];
            $branch['code'] = $request['code'];
            $branch['name'] = $request['name'];
            $branch['town'] = $request['town'];
            $branch->save();
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
        $failedOperation = '{operationStatus:failed, message:\'Operation Failed\'}';
        $successOperation = '{operationStatus:success, message:\'Center created successfully\'}';

        DB::beginTransaction();

        try {
            $branch = Branch::findOrFail($id);
            $branch->delete();
        } catch (Exception $exception) {
            DB::rollBack();
            return response()->json($failedOperation);
        }
        DB::commit();
        return response()->json($successOperation);
    }
}
