<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Canteen\User;

Route::get('/', function () {
    return view('home');
});
//Auth::routes();
Route::get('/teste', function() {

	$user = User::find(13);
	$filhos = $user->filhos;
	//dd($filhos);
	$array = new \ArrayObject();
	foreach ($filhos as $filho) {
		//dd($filho->user['name']);
		$array->append([
		'id' => $filho->id,
		'nome' => $filho->user['name'],
		'turma' => $filho->turma,
		]);
	}
	print_r($array);
});

//Route::get('cantina/pedido/create', 'PedidosController@create')->name('pedido.create');