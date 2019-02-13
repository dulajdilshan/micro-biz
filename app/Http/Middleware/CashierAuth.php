<?php

namespace App\Http\Middleware;

use Closure;

class CashierAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(auth()->user()->cashier()->exists()){
            return $next($request);
        }
        return redirect('/login');
    }
}
