<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $table = 'Profiles';
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
      'datainserted',
    ];


    /**
     * Get the details that the profile belongs to.
     */
    public function details()
    {
        return $this->hasMany(Detail::class);
    }

}
