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

Route::get('/this-user', 'Api\UserController@current_user');
Route::get('/users', 'Api\UserController@index');
Route::get('/loans', 'Api\LoanController@index');
Route::get('/payments', 'Api\PaymentController@index');
Route::get('/customers', 'Api\CustomerController@index');
Route::get('/customer/get-groupless', 'Api\CustomerController@getGrouplessCustomers');
Route::get('/customer/get-no-loans', 'Api\CustomerController@getCustomersWithNoLoans');
Route::get('/groups', 'Api\GroupController@index');
Route::get('/centers', 'Api\CenterController@index');
Route::get('/document-fees', 'Api\DocumentFeeController@index');
Route::get('/cashiers', 'Api\CashierController@index');
Route::get('/branches', 'Api\BranchController@index');
Route::get('/branch/get-centers-branches', 'Api\BranchController@getCentersBranches');
Route::get('/branch/get-customer-branches', 'Api\BranchController@getCustomerBranches');
Route::get('/center/get-customer-centers', 'Api\CenterController@getCustomerCenters');
Route::get('/document-fees/get-details-with-nic/{nic}', 'Api\DocumentFeeController@getLoanDetailsWithNic');
Route::get('/payment/get-details-with-nic/{nic}', 'Api\PaymentController@getDetailsWithNic');

//----------------------------------------
//Create Routes
//----------------------------------------
Route::post('/customer/create','Api\CustomerController@create');            //Customer
Route::post('/group/create', 'Api\GroupController@create');                  //Group
Route::post('/center/create', 'Api\CenterController@create');                //Center
Route::post('/branch/create', 'Api\BranchController@create');                //Branch
Route::post('/loan/create', 'Api\LoanController@create');                    //Loan
Route::post('/payment/create', 'Api\PaymentController@create');              //Payment
Route::post('/document-fee/create', 'Api\DocumentFeeController@create');    //Document Fee
Route::post('/cashier/create', 'Api\CashierController@create');              //Cashier

//----------------------------------------
//Update Routes
//----------------------------------------
Route::post('/branch/edit', 'Api\BranchController@edit');                    //Branch
Route::post('/center/edit', 'Api\CenterController@edit');                    //Center
Route::post('/customer/edit','Api\CustomerController@edit');                 //Customer

//----------------------------------------
//Delete Routes
//----------------------------------------
Route::delete('/branch/delete/{id}', 'Api\BranchController@destroy');        //Branch
Route::delete('/center/delete/{id}', 'Api\CenterController@destroy');        //Center
Route::delete('/customer/delete/{id}','Api\CustomerController@destroy');            //Customer
