<?php

Route::post('/login', 'auth\LoginController@login');



Route::group(['prefix' => 'cantina'], function () {
    Route::get('/', 'CantinaController@index')->name('cantina.index');
    Route::get('produtos/novo', 'ProdutosController@formNewProduto')->name('produto.new');
    Route::post('produtos', 'ProdutosController@create')->name('produto.create');
    Route::get('produtos/{id}/editar', 'ProdutosController@edit')->name('produto.edit');
    Route::put('produtos/{id}', 'ProdutosController@update')->name('produto.update');
    Route::delete('produtos/{id}', 'ProdutosController@destroy')->name('produto.destroy');
    Route::get('pedidos', 'PedidosController@getAll')->name('pedido.all');
});

Route::group(['prefix' => 'responsavel'], function () {
    Route::get('/', 'ResponsavelController@index')->name('responsavel.index');
    Route::post('/lanches', 'ProdutosController@show')->name('produto.show');
    Route::get('/refeicoes', 'ProdutosController@showLunch')->name('produto.showLunch');
    Route::post('/configuracoes/{id}', 'ResponsavelController@getConfig')->name('responsavel.getConfig');
    Route::get('/configuracoes', 'ResponsavelController@showConfig')->name('responsavel.showConfig');
});