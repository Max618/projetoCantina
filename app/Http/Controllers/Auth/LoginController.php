<?php

namespace Canteen\Http\Controllers\Auth;

use Canteen\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Canteen;

class LoginController extends Controller
{

    use AuthenticatesUsers;

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $email = $request->only('email');
        try {
            // verifica credenciais do usuario
            
            if (! $token = Auth::attempt($credentials)) {
                return response()->json(['nivel' => 0]);
            }
        } catch (Exception $e) {
            // credenciais erradas
            return response()->json(['erro' => 'could_not_create_token'], 401);
        }
        // td ok, pega nivel do usuario e retorna
        $user = Canteen\User::where('email', $email)->first();
        $nivel = $user->nivel;
        //$user = Canteen\User::where('email', $email)->firstOrFail();
        session(['nivel' => $nivel]);
        session(['user' => $user]);
        return response()->json(['nivel' => $nivel,'user' => $user]);
    }


}
