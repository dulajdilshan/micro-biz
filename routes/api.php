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
    return $request->user();
});

Route::get('/users','Api\UserController@index');
Route::get('/loans','Api\LoanController@index');
Route::get('/payments','Api\PaymentController@index');
Route::get('/customers','Api\CustomerController@index');
Route::get('/customers-with-nogroup','Api\CustomerController@getAllWithNoGroup');
Route::get('/groups','Api\GroupController@index');
Route::get('/document-fees','Api\DocumentFeeController@index');
Route::get('/customer/create','Api\CustomerController@create');
