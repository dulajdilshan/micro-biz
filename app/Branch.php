<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    public function center()
    {
        return $this->hasMany('App\Center');
    }

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
        return $this->hasMany('App\Group');
    }

    public function cashier()
    {
        return $this->hasMany('App\Cashier');
    }

    public function manager()
    {
        return $this->hasOne('App\Manager');
    }

    public function documentFee()
    {
        return $this->hasMany('App\DocumentFee');
    }

    public function payment()
    {
        return $this->hasMany('App\Payment');
    }

    public function arrears()
    {
        return $this->hasMany('App\Arrears');
    }

    public function lastCenter()
    {
        return $this->hasOne('App\LastCenter');
    }

    public function lastGroup()
    {
        return $this->hasOne('App\LastGroup');
    }
}
