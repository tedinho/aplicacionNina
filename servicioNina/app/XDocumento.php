<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class XDocumento extends Model
{
    protected $table = 'x_documento';
    protected $primaryKey = 'documento_id';
    public $timestamps = false;
}
