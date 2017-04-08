<?php

namespace Canteen\Http\Controllers;

use Illuminate\Http\Request;

class CantinaController extends Controller
{
	public function __construct()
	{
		//$this->middleware('cantina');
	}
    public function index()
    {
        return response()->json('pagina principal cantina');
    }
}

