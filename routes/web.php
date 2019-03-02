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

//Route::get('/', function () {
//    return redirect('/home');
//});

Route::get('/','HomeController@auth');

Auth::routes();

//Route::get('/users','Api\UserController@index');
Route::get('/home', 'HomeController@index')->name('home');

//Route::get('/dash','ManagerController@index');

Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');


// -------------------------------------------------------------
// Manager account Routes for pages
// -------------------------------------------------------------
Route::get('/manager-loans','ManagerController@index')->middleware('manager_auth');
Route::get('/manager-customers','ManagerController@customers')->middleware('manager_auth');
Route::get('/manager-centres','ManagerController@centres')->middleware('manager_auth');
Route::get('/manager-cashiers','ManagerController@cashiers')->middleware('manager_auth');
Route::get('/manager-groups','ManagerController@groups')->middleware('manager_auth');
Route::get('/manager-addnew-customer','ManagerController@groups')->middleware('manager_auth');
Route::get('/manager-payments','ManagerController@payments')->middleware('manager_auth');
Route::get('/manager-pending-loans','ManagerController@pendingLoans')->middleware('manager_auth');

// -------------------------------------------------------------
// Cashier account Routes for pages
// -------------------------------------------------------------
Route::get('/cashier-loans','CashierController@index')->middleware('cashier_auth');
Route::get('/cashier-customers','CashierController@customers')->middleware('cashier_auth');
Route::get('/cashier-groups','CashierController@groups')->middleware('cashier_auth');
Route::get('/cashier-payments','CashierController@payments')->middleware('cashier_auth');


// -------------------------------------------------------------
// Admin account Routes for pages
// -------------------------------------------------------------
Route::get('/admin-loans','AdminController@index')->middleware('admin_auth');
Route::get('/admin-customers','AdminController@customers')->middleware('admin_auth');
Route::get('/admin-centers','AdminController@centers')->middleware('admin_auth');
Route::get('/admin-cashiers','AdminController@cashiers')->middleware('admin_auth');
Route::get('/admin-groups','AdminController@groups')->middleware('admin_auth');
Route::get('/admin-payments','AdminController@payments')->middleware('admin_auth');
Route::get('/admin-pending-loans','AdminController@pendingLoans')->middleware('admin_auth');
Route::get('/admin-branches','AdminController@branches')->middleware('admin_auth');