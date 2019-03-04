<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GsDivision extends Model
{
    public function customer()
    {
        return $this->hasMany('App\Customer');
    }
}
