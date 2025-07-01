<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Signature extends Model
{
    protected $fillable = ['user_id', 'seance_id', 'statut', 'date'];
}
