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

Route::get('admin/login', 'Auth\AdminLoginController@showLoginForm');
Route::post('admin/login', 'Auth\AdminLoginController@login')->name('admin.login');

Route::get('manager/login', 'Auth\ManagerLoginController@showLoginForm');
Route::post('manager/login', 'Auth\ManagerLoginController@login')->name('manager.login');

Route::get('cashier/login', 'Auth\CashierLoginController@showLoginForm');
Route::post('cashier/login', 'Auth\CashierLoginController@login')->name('cashier.login');

Route::group(['prefix' => 'admin','middleware' => 'assign.guard:admin,admin/login'],function(){

    Route::get('home',function ()
    {
        return view('admin.admin_loans');
    });
    Route::get('/admin-loans','AdminController@index');
    Route::get('/admin-customers','AdminController@customers');
    Route::get('/admin-centres','AdminController@centres');
    Route::get('/admin-cashiers','AdminController@cashiers');
    Route::get('/admin-groups','AdminController@groups');
    Route::get('/admin-payments','AdminController@payments');
    Route::get('/admin-pending-loans','AdminController@pendingLoans');
});


Route::group(['prefix' => 'manager','middleware' => 'assign.guard:manager,manager/login'],function(){

    Route::get('home',function ()
    {
        return view('manager.manager_loans');
    });
    Route::get('/manager-loans','ManagerController@index');
    Route::get('/manager-customers','ManagerController@customers');
    Route::get('/manager-centres','ManagerController@centres');
    Route::get('/manager-cashiers','ManagerController@cashiers');
    Route::get('/manager-groups','ManagerController@groups');
    Route::get('/manager-addnew-customer','ManagerController@groups');
    Route::get('/manager-payments','ManagerController@payments');
    Route::get('/manager-pending-loans','ManagerController@pendingLoans');
});


Route::group(['prefix' => 'cashier','middleware' => 'assign.guard:cashier,cashier/login'],function(){

    Route::get('home',function ()
    {
        return view('cashier.cashier_loans');
    });
    Route::get('/cashier-loans','CashierController@index');
    Route::get('/cashier-customers','CashierController@customers');
    Route::get('/cashier-groups','CashierController@groups');
    Route::get('/cashier-payments','CashierController@payments');
});

//Route::get('/users','Api\UserController@index');
Route::get('/home', 'HomeController@index')->name('home');

//Route::get('/dash','ManagerController@index');


//Route::get('/home', 'HomeController@index')->name('home');


// -------------------------------------------------------------
// Manager account Routes for pages
// -------------------------------------------------------------
/*
Route::get('/manager-loans','ManagerController@index');
Route::get('/manager-customers','ManagerController@customers');
Route::get('/manager-centres','ManagerController@centres');
Route::get('/manager-cashiers','ManagerController@cashiers');
Route::get('/manager-groups','ManagerController@groups');
Route::get('/manager-addnew-customer','ManagerController@groups');
Route::get('/manager-payments','ManagerController@payments');
Route::get('/manager-pending-loans','ManagerController@pendingLoans');
*/

// -------------------------------------------------------------
// Cashier account Routes for pages
// -------------------------------------------------------------
/*
Route::get('/cashier-loans','CashierController@index');
Route::get('/cashier-customers','CashierController@customers');
Route::get('/cashier-groups','CashierController@groups');
Route::get('/cashier-payments','CashierController@payments');
*/

// -------------------------------------------------------------
// Admin account Routes for pages
// -------------------------------------------------------------
/*
Route::get('/manager-loans','ManagerController@index');
Route::get('/manager-customers','ManagerController@customers');
Route::get('/manager-centres','ManagerController@centres');
Route::get('/manager-cashiers','ManagerController@cashiers');
Route::get('/manager-groups','ManagerController@groups');
Route::get('/manager-payments','ManagerController@payments');
Route::get('/manager-pending-loans','ManagerController@pendingLoans');
*/