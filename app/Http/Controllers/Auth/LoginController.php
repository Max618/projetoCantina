<?php

namespace Canteen\Http\Controllers\Auth;

use Canteen\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Canteen;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

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
            return response()->json(['erro' => 'could_not_create_token'], 500);
        }

        // td ok, pega nivel do usuario e retorna
        $nivel = Canteen\User::where('email', $email)->value('nivel');
        return response()->json(['nivel' => $nivel]);
    }

}
