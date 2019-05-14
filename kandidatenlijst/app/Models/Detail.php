<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    //
    protected $table = 'Detail';

    protected $fillable = [
        'period_or_language',
        'description',
        'profile_id',
        'Type',
      ];

    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }


    public function detailtype()
    {
        return $this->hasMany('App\Models\Detailtype', 'Id', 'Type');
    }
}
