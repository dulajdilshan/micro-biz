<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('admin.admin_loans');
    }

    public function customers()
    {
        return view('admin.admin_customers');
    }

    public function centres()
    {
        return view('admin.admin_centres');
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

    public function pendingLoans()
    {
        return view('admin.admin_loans');
    }

    public function getAllAdmins()
    {
        $adminList = \App\Admin::all();
        return $adminList;
    }
}
