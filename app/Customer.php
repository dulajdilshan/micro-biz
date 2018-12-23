<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customers';

    public function loan()
    {
        return $this->hasMany('App\Loan');
    }

    public function payment()
    {
        return $this->hasMany('App\Payment');
    }
}
