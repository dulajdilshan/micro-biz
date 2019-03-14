<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Center extends Model
{
    public function loan()
    {
        return $this->hasMany('App\Loan');
    }

    public function customer()
    {
        return $this->hasMany('App\Customer');
    }

    public function group()
    {
        return $this->hasMany('App\group');
    }

    public function lastCustomer()
    {
        return $this->hasOne('App\LastCustomer');
    }

    public function lastGroup()
    {
        return $this->hasOne('App\LastGroup');
    }

    public function payment()
    {
        return $this->hasMany('App\Payment');
    }

    public function branch()
    {
        return $this->belongsTo('App\Branch');
    }

    public function lastCenter()
    {
        return $this->hasOne('App\LastCenter');
    }
}
