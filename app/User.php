<?php

namespace Canteen;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    // UM USER TEM UM ALUNO
    public function aluno()
    {
        return $this->hasOne('Canteen\Aluno');
    }

    // UM USER TEM MUITOS RELACIONAMENTOS
    public function relacionamentos()
    {
        return $this->hasMany('Canteen\Relacionamento');
    }

    // UM User TEM MUITOS PEDIDOS
    public function pedidos()
    {
        return $this->hasMany('Canteen\Pedido');
    }


}
