<?php

namespace Canteen\Http\Controllers;

use Illuminate\Http\Request;
use Canteen;
use Illuminate\Support\Facades\Auth;

class PedidosController extends Controller
{
    public function __construct()
    {
        //$this->middleware('cantina');
    }
    
    public function show() {
        $pedidos  = Canteen\Pedido::where('type', 0)->get();
        $array = new \ArrayObject();
        foreach ($pedidos as $pedido){
            $tabelaAluno = Canteen\Pedido::find($pedido['id'])->aluno;
               // echo "<br>".$tabelaAluno."<br>";
                $array->append([
                    'nome' => Canteen\Aluno::find($tabelaAluno['user_id'])->user['name'],
                    'turma' => Canteen\Pedido::find($pedido['id'])->aluno['turma'],
                    'pedidos' => $pedido['list'],
                    'preco_final' => $pedido['final_price'],
                ]);
        }
        return response()->json($array);
    }

    public function showLunch() {
        $pedidos  = Canteen\Pedido::where('type', 1)->get();
        $array = new \ArrayObject();
        foreach ($pedidos as $pedido){
            $tabelaAluno = Canteen\Pedido::find($pedido['id'])->aluno;
            // echo "<br>".$tabelaAluno."<br>";
            $array->append([
                'nome' => Canteen\Aluno::find($tabelaAluno['user_id'])->user['name'],
                'turma' => Canteen\Pedido::find($pedido['id'])->aluno['turma'],
                'pedidos' => $pedido['list'],
                'preco_final' => $pedido['final_price'],
            ]);
        }
        return response()->json($array);
    }

    public function create(Request $request)
    {
        try 
        {
            $pedido = new Canteen\Pedido();
            $pedido->fill($request->only('final_price','aluno_id'));
            $pedido->list = json_encode($request->only('list'));
            $pedido->user_id = implode('', $request->only('user'));
            $pedido->type = 0;
            //return $request->only('list');
            $lista = $request->only('list'); 
            if($pedido->save())
            {
                foreach ($lista as $produtoLista) {
                    foreach ($produtoLista as $produtoL) {
                        $produto = Canteen\Produto::find($produtoL['id']);
                        $produto->amount-=$produtoL['qtde'];
                        $produto->save();
                    }
                }
                return response()->json(['sucesso' => 'Pedido realizado']);
            }
            return response()->json(['erro' => 'Erro ao enviar os dados']);
        }
        catch (\Exception $e)
        {
            return $e;
        }
    }

    public function createLunch(Request $request)
    {
        try {
            $pedido = new Canteen\Pedido;
            $pedido->fill($request->only('final_price','aluno_id'));
            $pedido->list = json_encode($request->only('list'));
            $pedido->user_id = implode('', $request->only('user'));
            $pedido->type = 2;
            //return $request->only('list');
            $lista = $request->only('list');
            if($pedido->save())
            {
                foreach ($lista as $produtoLista) {
                    foreach ($produtoLista as $produtoL) {
                        $produto = Canteen\Produto::find($produtoL['id']);
                        $produto->amount-=$produtoL['qtde'];
                        $produto->save();
                    }
                }
                return response()->json(['sucesso' => 'Pedido realizado']);
            }
        }
        catch (\Exception $e)
        {
            return $e;
        }
    }
}
