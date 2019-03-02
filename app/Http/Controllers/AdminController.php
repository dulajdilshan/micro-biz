<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /*
    |--------------------------------------------------------------------------
    | View Pages
    |--------------------------------------------------------------------------
    */
    public function index()
    {
        return view('admin.admin_loans');
    }

    public function customers()
    {
        return view('admin.admin_customers');
    }

    public function centers()
    {
        return view('admin.admin_centers');
    }

    public function cashiers()
    {
        return view('admin.admin_cashiers');
    }

    public function groups()
    {
        return view('admin.admin_groups');
    }

    public function payments()
    {
        return view('admin.admin_payments');
    }

    public function branches()
    {
        return view('admin.admin_branches');
    }

    public function pendingLoans()
    {
        return view('admin.admin_loans');
    }


    /*
    |--------------------------------------------------------------------------
    | Functions
    |--------------------------------------------------------------------------
    */
    public function getAllAdmins()
    {
        $adminList = \App\Admin::all();
        return $adminList;
    }
}
