<?php

namespace Canteen\Http\Controllers;

use Illuminate\Http\Request;
use Canteen\Produto;
use Illuminate\Pagination\Paginator;

class ProdutosController extends CantinaController
{
    public function __construct()
    {
        //$this->middleware('cantina')->except('show','showLunch');
    }

    public function store(Request $request)
    {
        try {
            $produto = new Produto();
            $produto->fill($request->only('name','amount','price','type'));
            $produto->save();

            return response()->json(['success' => 'Produto inserido com Sucesso!']);
        }
        catch (\Exception $e){
            return $e;
        }
    }

    public function update(Request $request, $id)
    {
        try
        {
            $produto = Produto::find($id);
            $produto->fill($request->only('name', 'amount', 'price', 'type'));
            $produto->save();
            return response()->json(['success' => 'Produto salvo com sucesso!']);
        }
        catch (\Exception $e)
        {
            return $e;
        }
    }

    public function destroy($id)
    {
        $produto = Produto::find($id);
        if($produto->delete()) {
            return response()->json(['success' => 'produto deletado com sucesso']);
        }else {
            return response()->json(['erro' => 'falha ao deletar o produto']);
        }
    }

    public function show(){
        $lanches = Produto::select('id','name','price')->where('type', 1)->where('amount', '>', 0)->get();
        $outros = Produto::select('id','name','price')->where('type', 3)->where('amount', '>', 0)->get();
        $retorno = [
            'lanches' => $lanches,
            'outros' => $outros,
        ];
        return response()->json($retorno);
    }

    public function showLunch(){
        $produtos = Produto::select('id','name','price')->where('type', 2)->get();
        return response()->json($produtos);
    }

    public function getAll()
    {
        $produtos = Produto::all();
        return response()->json($produtos);
    }
}
