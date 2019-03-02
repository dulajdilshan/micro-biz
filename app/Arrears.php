<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Arrears extends Model
{
    public function loan()
    {
        return $this->belongsTo('App\Loan');
    }

    public function payment()
    {
        return $this->belongsTo('App\Payment');
    }
}
