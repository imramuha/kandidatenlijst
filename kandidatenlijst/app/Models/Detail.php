<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    //
    protected $table = 'details';

    protected $fillable = [
        'period_or_language',
        'description',
        'profile_id',
        'detailtype_id',
      ];

    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }


    public function detailtype()
    {
        return $this->hasMany('App\Models\Detailtype', 'id', 'detailtype_id');
    }
}
