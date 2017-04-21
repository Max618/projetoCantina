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
        //return $request;
        //return $request;
        /*$pedido = new Canteen\Pedido;
        $pedido->fill($request->only('final_price','aluno_id','user'));
        $pedido->list = json_encode($request->only('list'));
        return $pedido;*/
        $user = Canteen\User::find($request->only('user'));
        $lista = $request->only('list');
        $preco = $request->only('final_price');
        $aluno_id = $request->only('aluno_id');
        $user_id = $request->only('user');
        //return $user;
        //return $preco;
        //return response()->json($pedidos);
        try{
            $pedidoF = $user->pedidos()->create([
                    'final_price' => $request->only('final_price'),
                    'aluno_id' => $request->only('aluno_id'),
                    'list' => $request->only('list'),
                ]);
            return $pedidoF;
        } catch(\Exception $e){
            return $e;  
        }
        //return $user_id;
        try {
            /*$pedido = Canteen\Pedido::create([
                'final_price' => $preco,
                'aluno_id' => $aluno_id,
                'list' => $lista,
                'user_id' => $user_id,
            ]);*/
            $pedido = new Canteen\Pedido;
            //$pedido->fill($request->only('list','final_price','aluno_id','user'));
            //return $pedido;
            $pedido->fill($request->only('final_price','aluno_id'));
            $pedido->list = json_encode($request->only('list'));
            $pedido->user_id = $user_id;
            //return $pedido;

            //$pedido->user_id = $user->id;
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
