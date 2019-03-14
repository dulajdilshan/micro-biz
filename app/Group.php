<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    public function customer()
    {
        return $this->hasMany('App\Customer');
    }

    public function branch()
    {
        return $this->belongsTo('App\Branch');
    }

    public function center()
    {
        return $this->belongsTo('App\Center');
    }
}
