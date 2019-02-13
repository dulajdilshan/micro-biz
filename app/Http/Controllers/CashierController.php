<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CashierController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('cashier.cashier_loans');
    }

    public function customers()
    {
        return view('cashier.cashier_customers');
    }

    public function groups()
    {
        return view('cashier.cashier_groups');
    }

    public function payments()
    {
        return view('cashier.cashier_payments');
    }
}
