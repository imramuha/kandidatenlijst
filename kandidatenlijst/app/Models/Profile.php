<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $table = 'profiles';
    public $timestamps = false;
    //

    protected $fillable = [
      'name',
      'city',
      'email',
      'last_mailed_time',
      'candidate_id',
      'vdab_id',
      'is_new',
      'samenvatting',
      'persoongebonden_competenties',
      'vervoer',
      'extra_info',
      'adres',
      'geboortedatum',
      'nationaliteit',
      'geslacht',
      'gsm',
      'hobby',
      'beschikbaarheid',
      'date_inserted',
    ];


    public function details()
    {
        return $this->hasMany('App\Models\Detail', 'profile_id', 'id');
    }

}
