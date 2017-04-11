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

    public function formNewProduto()
    {
        return response()->json('mostrar form do novo produto');
    }

    public function create(Request $request)
    {
        try {
            $novo = [
                'name' => $request->input('name'),
                'amount' => $request->input('amount'),
                'price' => $request->input('price'),
                'lunch' => $request->only('lunch'),
            ];
            $produto = new Produto();
            $produto->create($novo);

            return redirect()->json(['success' => 'Produto inserido com Sucesso!']);
        }
        catch (\Exception $e){
            return response()->json(['erro' => 'produto_nao_criado'], 500);
        }
    }

    public function update(Request $request, $id)
    {
        $produto = Produto::find($id);
        $produto->fill($request->only('name', 'amount', 'price', 'lunch'));
        $produto->save();
        return redirect()->json(['success' => 'Produto salvo com sucesso!']);
    }

    public function edit($id)
    {
        $produto = Produto::find($id);
        return redirect()->json(compact(produto));
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
        $produtos = Produtos::where('lunch', false)->get();
        return response()->json($produtos);
    }

    public function showLunch(){
        $produtos = Produtos::where('lunch', true)->get();
        return response()->json($produtos);
    }
}
