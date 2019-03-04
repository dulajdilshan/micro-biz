<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customers';

    public function branch()
    {
        return $this->belongsTo('App\Branch');
    }

    public function center()
    {
        return $this->belongsTo('App\Center');
    }

    public function loan()
    {
        return $this->hasMany('App\Loan');
    }

    public function payment()
    {
        return $this->hasMany('App\Payment');
    }

    public function lastCustomer()
    {
        return $this->hasOne('App\LastCustomer');
    }

    public function gsDivision()
    {
        return $this->belongsTo('App\GsDivision');
    }

    public function group()
    {
        return $this->belongsTo('App\Group');
    }
}
