<?php

namespace Canteen\Http\Controllers;

use Illuminate\Http\Request;
use Canteen;

class PedidosController extends Controller
{
    public function __construct()
    {
        //$this->middleware('cantina');
    }
    
    public function getAll() {
        $pedidos  = Canteen\Pedido::where('type', false)->get();
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
        return $request;
    }
}
