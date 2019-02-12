<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return response()->json($request);
});

Route::get('/this-user','Api\UserController@current_user');
Route::get('/users','Api\UserController@index');
Route::get('/loans','Api\LoanController@index');
Route::get('/payments','Api\PaymentController@index');
Route::get('/customers','Api\CustomerController@index');
Route::get('/customer/get-groupless','Api\CustomerController@getGrouplessCustomers');
Route::get('/customer/get-no-loans','Api\CustomerController@getCustomersWithNoLoans');
Route::get('/groups','Api\GroupController@index');
Route::get('/centers','Api\CenterController@index');
Route::get('/document-fees','Api\DocumentFeeController@index');
Route::get('/cashiers','Api\CashierController@index');
Route::get('/document-fees/get-details-with-nic/{nic}','Api\DocumentFeeController@getLoanDetailsWithNic');
Route::get('/payment/get-details-with-nic/{nic}','Api\PaymentController@getDetailsWithNic');

//----------------------------------------
//Create Routes
//----------------------------------------
Route::post('/customer/create','Api\CustomerController@create');            //Customer
Route::post('/group/create','Api\GroupController@create');                  //Group
Route::post('/center/create','Api\CenterController@create');                //Center
//Route::post('/Branch/create','Api\BranchController@create');                //Branch
Route::post('/loan/create','Api\LoanController@create');                    //Loan
Route::post('/Payment/create','Api\PaymentController@create');              //Payment
Route::post('/cashier/create','Api\CashierController@create');              //Cashier

