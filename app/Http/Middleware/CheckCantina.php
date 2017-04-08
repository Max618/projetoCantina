<?php

namespace Canteen\Http\Middleware;

use Closure;

class CheckCantina
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
        if($request->nivel != 3)
        //if(session('nivel') != 3)
        {
            return response()->json(['alert' => 'sem permissao!'])
        }
        return $next($request);
    }
}
