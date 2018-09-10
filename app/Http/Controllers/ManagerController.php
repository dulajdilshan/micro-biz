<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ManagerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('manager.manager_loans');
    }

    public function customers()
    {
        return view('manager.manager_customers');
    }

    public function centres()
    {
        return view('manager.manager_centres');
    }

    public function cashiers()
    {
        return view('manager.manager_cashiers');
    }

    public function groups()
    {
        return view('manager.manager_groups');
    }

    public function payments()
    {
        return view('manager.manager_payments');
    }


}
