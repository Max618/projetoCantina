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
        //return Auth::user()->name;
        $user = $request->only('user');
        $pedidos = $request->only('pedido');
        //return response()->json($pedidos);
        try {
            /*$pedido = Canteen\Pedido::create([
                'final_price' => $pedidos[0],
                'aluno_id' => $pedidos[2],
                'list' => $pedidos[1][0]
            ]);*/
            $pedido = new Canteen\Pedido;
            $pedido->fill($request->only('pedido'));
            $pedido->user_id = $user->id;
            $pedido->save();
            //$pedido = $user->pedidos;
            return response()->json(['sucesso' => 'Pedido realizado']);
        }
        catch (\Exception $e)
        {
            return $e;
        }
    }
}
