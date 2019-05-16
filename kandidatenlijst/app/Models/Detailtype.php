<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Detailtype extends Model
{
    //
    
    //

    protected $fillable = [
      'type',
    ];


    public function details()
    {
      return $this->belongsTo(Detail::class);

    }

}
