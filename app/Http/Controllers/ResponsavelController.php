<?php

namespace Canteen\Http\Controllers;

use Illuminate\Http\Request;

class ResponsavelController extends Controller
{

    public function index()
    {
        return response()->json('pagina inicial do responsavel');
    }

    public function getConfig($id){
        //pegar configurações do id e redireciona para show config
    }

    public function showConfig(){
        //pega configurações do get config e mostra
    }
}
