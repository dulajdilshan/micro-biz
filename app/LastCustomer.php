<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LastCustomer extends Model
{
    public function customer()
    {
        return $this->belongsTo('App\Customer');
    }

    public function center()
    {
        return $this->hasOne('App\Center');
    }
}
