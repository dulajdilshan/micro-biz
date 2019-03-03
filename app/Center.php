<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Center extends Model
{
    public function loan()
    {
        return $this->hasMany('App\Loan');
    }

    public function lastCustomer()
    {
        return $this->hasMany('App\LastCustomer');
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
