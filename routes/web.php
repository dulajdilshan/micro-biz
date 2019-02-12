<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/manager-loans');
});

Auth::routes();

//Route::get('/users','Api\UserController@index');
//Route::get('/home', 'HomeController@index')->name('home');

//Route::get('/dash','ManagerController@index');

Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');


// -------------------------------------------------------------
// Manager account Routes for pages
// -------------------------------------------------------------
Route::get('/manager-loans','ManagerController@index');
Route::get('/manager-customers','ManagerController@customers');
Route::get('/manager-centres','ManagerController@centres');
Route::get('/manager-cashiers','ManagerController@cashiers');
Route::get('/manager-groups','ManagerController@groups');
Route::get('/manager-addnew-customer','ManagerController@groups');
Route::get('/manager-payments','ManagerController@payments');
Route::get('/manager-pending-loans','ManagerController@pendingLoans');

// -------------------------------------------------------------
// Cashier account Routes for pages
// -------------------------------------------------------------
Route::get('/cashier-loans','CashierController@index');
Route::get('/cashier-customers','CashierController@customers');
Route::get('/cashier-groups','CashierController@groups');
Route::get('/cashier-payments','CashierController@payments');


// -------------------------------------------------------------
// Admin account Routes for pages
// -------------------------------------------------------------
Route::get('/manager-loans','ManagerController@index');
Route::get('/manager-customers','ManagerController@customers');
Route::get('/manager-centres','ManagerController@centres');
Route::get('/manager-cashiers','ManagerController@cashiers');
Route::get('/manager-groups','ManagerController@groups');
Route::get('/manager-payments','ManagerController@payments');
Route::get('/manager-pending-loans','ManagerController@pendingLoans');